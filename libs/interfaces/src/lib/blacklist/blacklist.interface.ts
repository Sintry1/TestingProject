import { ICompletedAt } from '../base.interface';

export interface IBlacklist extends ICompletedAt {
  blacklistId: string;
  name?: string;
  comments?: string;
  expiresAt?: Date;
  files?: string[];
}

export interface ICreateBlacklistRequest {
  name?: string;
  comments?: string;
  expiresAt?: Date;
  files?: string[];
}

export interface IUpdateBlacklistRequest {
  name?: string;
  comments?: string;
  expiresAt?: Date;
  files?: string[];
}

export interface IGetBlacklistByIdResponse extends IBlacklist {
  downloadUrl: string;
}