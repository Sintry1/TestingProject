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
  constructor(
    @InjectRepository(Announcement)
    private readonly repo: Repository<Announcement>
  ) {}

  create(): Array<Promise<Announcement>> {
    // The file that will be uploaded to Linode
    const fileBuffer = fs.readFileSync(path.join(__dirname, '/assets/announcement.jpg'));

    return this.generate().map(async (announcement: IAnnouncement) => {
      try {
        await uploadFileToLinode(fileBuffer, `${announcement.files[0]}`);
        return await this.repo.save(announcement);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 1); // six months in the past
    const endDate = new Date(Date.now());
    endDate.setMonth(endDate.getMonth() + 2); // 2 months in the future

    // Generate the data
    const data: IAnnouncement[] = [];
    announcements.forEach((announcement) => {
      const showFrom = new Date(startDate);
      showFrom.setDate(showFrom.getMonth() - getRandomInt(1, 6));
      showFrom.setDate(showFrom.getDate() + getRandomInt(1, 28));

      const showTo = new Date(startDate);
      showTo.setDate(showTo.getMonth() - getRandomInt(1, 6));
      showTo.setDate(showTo.getDate() + getRandomInt(1, 28));

      const announcementId = uuidv4();

      data.push({
        announcementId,
        comments: announcement.comments,
        title: announcement.title,
        showFrom,
        showTo,
        files: [`${announcementId}announcement.jpg`],
      });
    });

    return data;
  }
}
