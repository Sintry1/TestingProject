import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlacklistRequest, UpdateBlacklistRequest } from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import { Repository } from 'typeorm';
import { FilesService } from '../files/files.service';

@Injectable()
export class BlacklistService {
  constructor(
    @InjectRepository(Blacklist)
    private readonly blacklistRepo: Repository<Blacklist>,
    private readonly fileService: FilesService
  ) {}

  async createBlacklist(blacklistData: CreateBlacklistRequest) {
    return await this.blacklistRepo.save(blacklistData);
  }
  async fetchAllBlacklist() {
    return await this.blacklistRepo.find();
  }

  async fetchBlacklistbyId(blacklistId) {
    return await this.blacklistRepo.findOneByOrFail({ blacklistId });
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

  async updateBlacklistFile(blacklistId: string, blacklistFile: Express.Multer.File) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });

    try {
      await this.fileService.uploadFile(blacklistFile.buffer, blacklistFile.originalname);
    } catch (error) {
      throw new HttpException(
        'Failed to upload the file. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    return await this.blacklistRepo.save(blacklist);
  }

  async deleteBlacklistEntry(blacklistId: string) {
    const blacklist = await this.blacklistRepo.findOneByOrFail({ blacklistId });
    await this.blacklistRepo.remove(blacklist);
  }
}
