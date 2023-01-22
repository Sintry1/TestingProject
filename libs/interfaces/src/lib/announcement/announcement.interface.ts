import { IBase } from '../base.interface';

export interface IAnnouncement extends IBase {
  announcementId: string;
  title?: string;
  comments?: string;
  showTo?: Date | null;
  showFrom?: Date | null;
  files: string[];
}

export interface IAnnouncementRequest {
  title?: string;
  comments?: string;
  showTo?: Date | null;
  showFrom?: Date | null;
  files?: string[];
}
