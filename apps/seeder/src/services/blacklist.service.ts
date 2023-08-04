import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IBlacklist } from '@omnihost/interfaces';
import { Blacklist } from '@omnihost/models';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { unwantedGuests } from '../constants/unwanted-guests.constant';
import { getRandomInt, uploadFileToLinode } from './utils.service';

@Injectable()
export class BlacklistSeederService {
  uploadedFileName1 = '7ef1822d-72c0-4932-8778-227986b74931blacklist1.jpg';
  uploadedFileName2 = '7ef1822d-72c0-4932-8778-227986b74931blacklist2.jpg';

  constructor(
    @InjectRepository(Blacklist)
    private readonly repo: Repository<Blacklist>
  ) {}

  create(): Array<Promise<Blacklist>> {
    // The files that will be uploaded to Linode
    // Source: https://pixabay.com/vectors/burglar-crime-criminal-theft-thief-157142/ (free use license)
    let fileBuffer = fs.readFileSync(path.join(__dirname, '/assets/stock-burglar.png'));
    uploadFileToLinode(fileBuffer, this.uploadedFileName1);
    // Source: https://pixabay.com/vectors/anarchist-demonstration-anarchy-41384/ (free use license)
    fileBuffer = fs.readFileSync(path.join(__dirname, '/assets/stock-anarchist.png'));
    uploadFileToLinode(fileBuffer, this.uploadedFileName2);

    return this.generate().map(async (blacklist: IBlacklist) => {
      try {
        return await this.repo.save(blacklist);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 6); // six months in the past

    // Generate the data
    const data: IBlacklist[] = [];
    unwantedGuests.forEach((entry) => {
      const createdAt = new Date(startDate);
      createdAt.setDate(createdAt.getDate() + getRandomInt(0, 240)); // up to 9 months after the date from 6 months ago

      const expiresAt = new Date(createdAt);
      expiresAt.setDate(expiresAt.getDate() + getRandomInt(0, 180)); // up to 6 months after the start date

      data.push({
        blacklistId: uuidv4(),
        name: entry.name,
        comments: entry.comments,
        createdAt: createdAt,
        expiresAt: expiresAt,
        files: [this.uploadedFileName1, this.uploadedFileName2],
      });
    });

    return data;
  }
}
