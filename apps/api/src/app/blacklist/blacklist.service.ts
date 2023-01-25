import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlacklistRequest, UpdateBlacklistRequest } from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import { Repository } from 'typeorm';

@Injectable()
export class BlacklistService {
  constructor(
    @InjectRepository(Blacklist)
    private readonly blacklistRepo: Repository<Blacklist>
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
}
