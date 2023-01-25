import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlacklistRequest, UpdateBlacklistRequest } from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import { Between, ILike, Repository } from 'typeorm';
import { filterStatus } from '../utils/query-params.utils';

@Injectable()
export class BlacklistService {
  constructor(
    @InjectRepository(Blacklist)
    private readonly blacklistRepo: Repository<Blacklist>
  ) {}

  async fetchAllBlacklist() {
    return await this.blacklistRepo.find();
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
}
