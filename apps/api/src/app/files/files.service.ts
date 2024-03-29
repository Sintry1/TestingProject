import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { FileTypePattern } from '@omnihost/interfaces';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { configService } from '../config/config.service';
import { SentryService } from '../utils/sentry.service';

@Injectable()
export class FilesService {
  private readonly logger = new Logger(FilesService.name);

  constructor(private readonly httpService: HttpService) {}

  /**
   * Makes a request to Linode and creates a signed url allowing file access for a limited amount of time.
   * @param fileName the name of the file.
   * @param expiresIn how long the link should be valid for. In seconds. Between 360 and 86400 seconds.
   * @returns a url, or throws an error if the file doesn't exist.
   */
  async getSignedLink(
    fileName: string,
    expiresIn: number
  ): Promise<{ url: string; exists: boolean }> {
    const accessKey = configService.getValue('API_LINODE_PERSONAL_TOKEN', true);
    const clusterId = configService.getValue('API_LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('API_LINODE_STORAGE_BUCKET_ID', true);
    this.logger.verbose(
      `Fetching signed url with expiration: '${expiresIn}' for filename: '${fileName}'`
    );

    const { data } = await firstValueFrom(
      this.httpService
        .post(
          `https://api.linode.com/v4/object-storage/buckets/${clusterId}/${bucketId}/object-url`,
          {
            name: this.sanitizeFilename(fileName),
            expires_in: expiresIn,
            method: 'GET',
          },
          { headers: { Authorization: `Bearer ${accessKey}` } }
        )
        .pipe(
          catchError((error: AxiosError) => {
            SentryService.log(
              'error',
              'Failed to get the signed url from Linode',
              this.logger,
              error.response.data
            );
            throw new Error('Failed to get the signed url from Linode');
          })
        )
    );
    if (!data.exists) {
      throw new Error(`The file doesn't exist: ${fileName}`);
    }
    return data;
  }

  /**
   * Makes a parallel series of requests to Linode and creates a list of signed url allowing file access for a limited amount of time.
   * @param fileNames a list of names of the files to fetch.
   * @param expiresIn Optional. How long the link should be valid for. In seconds. Between 360 and 86400 seconds.
   * @returns a list of urls, or throws an error if one of the files doesn't exist.
   */
  async getSignedLinkBulk(fileNames: string[], expiresIn = 600): Promise<string[]> {
    const promises = [];
    for (const fileName of fileNames) {
      promises.push(this.getSignedLink(fileName, expiresIn));
    }
    return (await Promise.all(promises)).map((file) => file.url);
  }

  /**
   * Uploads a file to the Linode S3 bucket. Updates the file if it already exists.
   * @param dataBuffer `Express.Multer.File` file.buffer.
   * @param fileName the name that the file should be uploaded under.
   * @example async uploadFile(@UploadedFile() file: Express.Multer.File) { const { url } = await this.filesService.uploadFile(file.buffer, file.originalname); }}
   * @returns signed URL link that allows access to the file for 10 minutes.
   * @throws InvalidAccessKeyIdError | UploadFailedError
   */
  async uploadFile(dataBuffer: Buffer, filename: string): Promise<{ url: string }> {
    const clusterId = configService.getValue('API_LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('API_LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = configService.getValue('API_LINODE_STORAGE_ACCESS_KEY', true);
    const secretKey = configService.getValue('API_LINODE_STORAGE_SECRET_KEY', true);

    try {
      const s3 = new S3Client({
        region: clusterId,
        credentials: {
          accessKeyId: accessKey,
          secretAccessKey: secretKey,
        },
        endpoint: `https://${clusterId}.linodeobjects.com`,
      });

      const uploadResult = await s3.send(
        new PutObjectCommand({
          Bucket: bucketId,
          Body: dataBuffer,
          Key: this.sanitizeFilename(filename),
        })
      );
      if (uploadResult.$metadata.httpStatusCode != 200) {
        throw new Error('UploadFailedError');
      } else {
        this.logger.verbose(`New file uploaded to linode storage. Filename: ${filename}`);

        return this.getSignedLink(this.sanitizeFilename(filename), 600);
      }
    } catch (error) {
      SentryService.log(
        'error',
        'Failed to upload a file to Linode Object storage',
        this.logger,
        error
      );
      if (error.name === 'InvalidAccessKeyId') {
        throw new Error('InvalidAccessKeyIdError');
      } else {
        throw new Error('UploadFailedError');
      }
    }
  }

  /**
   * Deletes a file from the Linode S3 bucket. Doesn't matter if the file exists or not.
   * @param filename the name of the file to be deleted.
   * @returns true if successfully deleted. Doesn't matter if the file exists or not.
   * @throws InvalidAccessKeyIdError | DeleteFailedError
   */
  async deleteFile(filename: string): Promise<boolean> {
    const clusterId = configService.getValue('API_LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = configService.getValue('API_LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = configService.getValue('API_LINODE_STORAGE_ACCESS_KEY', true);
    const secretKey = configService.getValue('API_LINODE_STORAGE_SECRET_KEY', true);

    try {
      const s3 = new S3Client({
        region: clusterId,
        credentials: {
          accessKeyId: accessKey,
          secretAccessKey: secretKey,
        },
        endpoint: `https://${clusterId}.linodeobjects.com`,
      });
      await s3.send(
        new DeleteObjectCommand({
          Bucket: bucketId,
          Key: this.sanitizeFilename(filename),
        })
      );
      this.logger.verbose(`File deleted from linode storage. Filename: ${filename}`);
      return true;
    } catch (error) {
      SentryService.log(
        'error',
        'Failed to delete a file from Linode Object storage',
        this.logger,
        error
      );
      if (error.name === 'InvalidAccessKeyId') {
        throw new Error('InvalidAccessKeyIdError');
      } else {
        throw new Error('DeleteFailedError');
      }
    }
  }

  /**
   * Remove or replace the characters that would cause the stored filename to be invalid.\
   * The invalid names manifest themselves as 403: Forbidden error when trying to access it via the signed link.
   * @param name the filename to sanitize.
   * @returns the sanitized name.
   */
  sanitizeFilename(name: string) {
    return name.replaceAll(' ', '-').replaceAll('(', '').replaceAll(')', '');
  }
}

/**
 * Perform file type validation for the Multer file interceptor.
 * @param fileTypePattern the desired allowed file types.
 * @example  FilesInterceptor('files', 20, { fileFilter(req, file, callback) { return validateFileType(req, file, callback, FileTypePattern.PICTURES_AND_VIDEO) },})
 * @returns interceptor callback with the validation result.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateFileType(req: any, file: any, callback: any, filePattern: FileTypePattern) {
  const nameParts = file.originalname.split('.');
  const fileType = nameParts[nameParts.length - 1].toLowerCase();
  const pattern = new RegExp(filePattern);

  if (!fileType.match(pattern)) {
    const trimmedFileTypes = filePattern
      .replaceAll('(', '')
      .replaceAll(/\|+/g, ', ')
      .replaceAll(')', '');
    req.fileValidationError = `Invalid file type for file: '${file.originalname}'. Allowed filetypes: [${trimmedFileTypes}]`;
    return callback(
      new BadRequestException(
        `Invalid file type for file: '${file.originalname}'. Allowed filetypes: [${trimmedFileTypes}]`
      ),
      false
    );
  }

  return callback(null, true);
}
