import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAnnouncement } from '@omnihost/interfaces';
import { Announcement } from '@omnihost/models';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { announcements } from '../constants/announcements.constant';
import { getRandomInt, uploadFileToLinode } from './utils.service';

@Injectable()
export class AnnouncementsSeederService {
  uploadedFileName = '7ef1822d-72c0-4932-8778-227986b74931announcement.jpg';

  constructor(
    @InjectRepository(Announcement)
    private readonly repo: Repository<Announcement>
  ) {}

  create(): Array<Promise<Announcement>> {
    // The file that will be uploaded to Linode
    const fileBuffer = fs.readFileSync(path.join(__dirname, '/assets/stock-announcement.jpg'));
    uploadFileToLinode(fileBuffer, this.uploadedFileName);

    return this.generate().map(async (announcement: IAnnouncement) => {
      try {
        return await this.repo.save(announcement);
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
    const data: IAnnouncement[] = [];
    announcements.forEach((announcement) => {
      const showFrom = new Date(startDate);
      showFrom.setDate(showFrom.getDate() + getRandomInt(0, 240)); // up to 9 months after the date from 6 months ago

      const showTo = new Date(showFrom);
      showTo.setDate(showTo.getDate() + getRandomInt(0, 180)); // up to 6 months after the start date

      data.push({
        announcementId: uuidv4(),
        comments: announcement.comments,
        title: announcement.title,
        showFrom,
        showTo,
        files: [`announcement.jpg`],
      });
    });

    return data;
  }
}
