import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlacklistRequest, UpdateBlacklistRequest } from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import { Repository } from 'typeorm';
import { FilesService } from '../files/files.service';

const FILE_MAX_SIZE = 100000000;

@Injectable()
export class BlacklistService {
  constructor(
    @InjectRepository(Blacklist)
    private readonly blacklistRepo: Repository<Blacklist>,
    private readonly fileService: FilesService
  ) {}

  async findAll() {
    return await this.blacklistRepo.find();
  }

  async fetchBlacklistById(blacklistId: string) {
    return await this.blacklistRepo.findOneByOrFail({ blacklistId });
  }

  async createBlacklist(blacklistData: CreateBlacklistRequest, files: Express.Multer.File[]) {
    try {
      const promises: Promise<{ url: string }>[] = [];
      for (const file of files) {
        if (file.size > FILE_MAX_SIZE) {
          return new BadRequestException(`Invalid file size for file: ${file.originalname}`);
        }
        promises.push(this.fileService.uploadFile(file.buffer, file.originalname));
      }
      await Promise.all(promises);
    } catch (error) {
      throw new HttpException(
        'Failed to upload the file(s). Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    return await this.blacklistRepo.save({
      ...blacklistData,
      files: this.toFileNames(files),
    });
  }

  async updateBlacklist(
    blacklistId: string,
    blacklistData: UpdateBlacklistRequest,
    files: Express.Multer.File[]
  ) {
    let blacklist: Blacklist;

    if (files.length !== 0) {
      const result = await this.updateBlacklistFiles(blacklistId, files);
      if (result instanceof BadRequestException) {
        return result;
      } else {
        blacklist = result;
      }
    } else {
      blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });
    }

    for (const key in blacklistData) {
      if (Object.prototype.hasOwnProperty.call(blacklistData, key)) {
        blacklist[key] = blacklistData[key];
      }
    }

    return await this.blacklistRepo.save(blacklist);
  }

  async deleteBlacklistEntry(blacklistId: string) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });
    try {
      for (const file of blacklist.files) {
        await this.fileService.deleteFile(file);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to delete the blacklsit entry. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    await this.blacklistRepo.remove(blacklist);
    return { message: 'Deleted.' };
  }

  async getFilesLink(fileNames: string[]) {
    try {
      return await this.fileService.getSignedLinkBulk(fileNames);
    } catch (error) {
      throw new HttpException(
        "Failed to get the files' links. Please try again later.",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateBlacklistFiles(blacklistId: string, files: Express.Multer.File[]) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });
    if (blacklist.files.length + files.length > 20) {
      return new BadRequestException(
        `File size limit surpassed. An blacklist can have a maximum of 20 files. It currently has ${blacklist.files.length}`
      );
    }

    try {
      for (const file of files) {
        if (file.size > FILE_MAX_SIZE) {
          return new BadRequestException(`Invalid file size for file: ${file.originalname}`);
        }

        await this.fileService.uploadFile(file.buffer, file.originalname);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to upload the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    blacklist.files.push(...this.toFileNames(files));

    return await this.blacklistRepo.save(blacklist);
  }

  async removeBlacklistFiles(blacklistId: string, fileNames: string[]) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });

    try {
      for (const file of blacklist.files) {
        if (fileNames.includes(file)) {
          await this.fileService.deleteFile(file);
          blacklist.files = blacklist.files.filter((fileName) => fileName !== file);
        }
      }
    } catch (error) {
      throw new HttpException(
        'Failed to remove the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.blacklistRepo.save(blacklist);
  }

  async clearBlacklistFiles(blacklistId: string) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });

    try {
      for (const file of blacklist.files) {
        await this.fileService.deleteFile(file);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the documents. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    blacklist.files = [];

    return await this.blacklistRepo.save(blacklist);
  }

  private toFileNames(files: Express.Multer.File[]) {
    const fileNames: string[] = [];
    files.forEach((file) => fileNames.push(file.originalname));
    return fileNames;
  }
}
