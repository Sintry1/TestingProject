import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IDocument } from '@omnihost/interfaces';
import { Document } from '@omnihost/models';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { documents } from '../constants/documents.constant';
import { getRandomInt } from './utils.service';

@Injectable()
export class DocumentsSeederService {
  constructor(
    @InjectRepository(Document)
    private readonly repo: Repository<Document>
  ) {}

  create(): Array<Promise<Document>> {
    // The file that will be uploaded to Linode
    const documentBuffer = fs.readFileSync(path.join(__dirname, '/assets/document.pdf'));

    return this.generate().map(async (document: IDocument) => {
      try {
        await this.uploadFileToLinode(documentBuffer, document.documentName);
        return await this.repo.save(document);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 6); // day six months in the past
    const endDate = new Date(Date.now());
    endDate.setMonth(endDate.getMonth() + 2); // day 2 months in the future

    // Generate the data
    const data: IDocument[] = [];
    documents.forEach((document) => {
      const randomDate = new Date(Date.now());
      randomDate.setDate(randomDate.getMonth() - getRandomInt(1, 6));
      randomDate.setDate(randomDate.getDate() + getRandomInt(1, 28));
      const lastViewedAt = new Date(Date.now());
      lastViewedAt.setDate(lastViewedAt.getDate() - getRandomInt(0, 30));
      lastViewedAt.setHours(getRandomInt(6, 12), getRandomInt(0, 60));
      data.push({
        documentId: uuidv4(),
        title: document.title,
        comments: document.comments,
        lastViewedAt: lastViewedAt,
        showOnDashboard: document.showOnDashboard,
        documentName: 'document.pdf',
        createdAt: randomDate,
        updatedAt: lastViewedAt,
      });
    });

    return data;
  }

  async uploadFileToLinode(dataBuffer: Buffer, filename: string) {
    const clusterId = this.getValue('API_LINODE_STORAGE_CLUSTER_ID', true);
    const bucketId = this.getValue('API_LINODE_STORAGE_BUCKET_ID', true);
    const accessKey = this.getValue('API_LINODE_STORAGE_ACCESS_KEY', true);
    const secretKey = this.getValue('API_LINODE_STORAGE_SECRET_KEY', true);

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
          Key: filename,
        })
      );
      if (uploadResult.$metadata.httpStatusCode != 200) {
        throw new Error('UploadFailedError');
      }
    } catch (error) {
      console.warn(`Failed to upload document with name ${filename}`);
    }
  }

  private getValue(key: string, throwOnMissing: boolean): string {
    const value = process.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }
}
