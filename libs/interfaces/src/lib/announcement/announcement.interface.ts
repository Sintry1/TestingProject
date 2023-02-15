import { IBase } from '../base.interface';

export interface IAnnouncement extends IBase {
  announcementId: string;
  title?: string;
  comments?: string;
  showTo?: Date | null;
  showFrom?: Date | null;
  files: string[];
}

export interface IGetAnnouncementByIdResponse extends IAnnouncement {
  downloadUrls: string[];
}

export interface IAnnouncementRequest {
  title?: string;
  comments?: string;
  showTo?: Date | null;
  showFrom?: Date | null;
}

export interface ICreateAnnouncementRequest {
  title: string;
  comments: string;
  showTo: Date;
  showFrom: Date;
}

export interface IUpdateAnnouncementRequest {
  title?: string;
  comments?: string;
  showTo?: Date | null;
  showFrom?: Date | null;
}
