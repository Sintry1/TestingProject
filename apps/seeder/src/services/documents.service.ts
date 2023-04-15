import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IDocument } from '@omnihost/interfaces';
import { Document } from '@omnihost/models';
import * as fs from 'fs';
import * as path from 'path';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { documents } from '../constants/documents.constant';
import { getRandomInt, uploadFileToLinode } from './utils.service';

@Injectable()
export class DocumentsSeederService {
  uploadedFileName = 'bd53de32-f76e-4b5d-8204-cc7edbfa3946document.pdf';
  constructor(
    @InjectRepository(Document)
    private readonly repo: Repository<Document>
  ) {}

  create(): Array<Promise<Document>> {
    // The file that will be uploaded to Linode
    const documentBuffer = fs.readFileSync(path.join(__dirname, '/assets/document.pdf'));
    uploadFileToLinode(documentBuffer, this.uploadedFileName);

    return this.generate().map(async (document: IDocument) => {
      try {
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
        documentName: this.uploadedFileName,
        createdAt: randomDate,
        updatedAt: lastViewedAt,
      });
    });

    return data;
  }
}
