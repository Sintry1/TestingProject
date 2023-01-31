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

  async fetchAllBlacklist() {
    return await this.blacklistRepo.find();
  }

  async fetchBlacklistbyId(blacklistId) {
    return await this.blacklistRepo.findOneByOrFail({ blacklistId });
  }

  async createBlacklist(blacklistData: CreateBlacklistRequest) {
    return await this.blacklistRepo.save(blacklistData);
  }

  async updateBlacklist(blacklistId: string, blacklistData: UpdateBlacklistRequest) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });

    for (const key in blacklistData) {
      if (Object.prototype.hasOwnProperty.call(blacklistData, key)) {
        blacklist[key] = blacklistData[key];
      }
    }

    return await this.blacklistRepo.save(blacklist);
  }

  async deleteBlacklistEntry(blacklistId: string) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });
    await this.blacklistRepo.remove(blacklist);
  }

  async getFilesLink(documentNames: string[]) {
    try {
      return await this.toDocuments(documentNames);
    } catch (error) {
      throw new HttpException(
        "Failed to get the documents' links. Please try again later.",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateBlacklistFile(blacklistId: string, blacklistFiles: Express.Multer.File[]) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });

    if (blacklist.files.length + blacklistFiles.length > 20) {
      return new BadRequestException(
        `File size limit surpassed. A blacklist entry can have a maximum of 20 files. It currently has ${blacklist.files.length}`
      );
    }

    try {
      for (const file of blacklistFiles) {
        if (file.size > FILE_MAX_SIZE) {
          return new BadRequestException(`Invalid file size for file: ${file.originalname}`);
        }

        await this.fileService.uploadFile(file.buffer, file.originalname);
      }
    } catch (error) {
      throw new HttpException(
        'Failed to upload the file. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    blacklist.files.push(...this.toDocumentNames(blacklistFiles))

    return await this.blacklistRepo.save(blacklist);
  }

  async removeBlacklistFiles(blacklistId: string, documentNames: string[]) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });

    try {
      for (const document of blacklist.files) {
        if (documentNames.includes(document)) {
          await this.fileService.deleteFile(document);
          blacklist.files = blacklist.files.filter((file) => file !== document);
        }
      }
    } catch (error) {
      throw new HttpException(
        'Failed to clear the files. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.blacklistRepo.save(blacklist);
  }

  async clearBlacklistFiles(blacklistId: string) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });

    try {
      for (const document of blacklist.files) {
        await this.fileService.deleteFile(document);
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

  private toDocumentNames(documents: Express.Multer.File[]) {
    const documentNames: string[] = [];
    documents.forEach((document) => documentNames.push(document.originalname));
    return documentNames;
  }

  private async toDocuments(documentNames: string[]) {
    const documents = [];
    for (const documentName of documentNames) {
      documents.push((await this.fileService.getSignedLink(documentName, 600)).url);
    }
    return documents;
  }
}
