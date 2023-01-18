import { ICompletedAt } from '../base.interface';

export interface IBlacklist extends ICompletedAt {
  blacklistId: string;
  name?: string;
  reason?: Date | null;
  deadline?: string;
  files?: string;
  updatedAt?: boolean;
}

export interface ICreateBlacklistRequest {
  name?: string;
  reason?: Date | null;
  deadline?: string;
  files?: string;
  updatedAt?: boolean;
}

export interface IUpdateBlacklistRequest {
  name?: string;
  reason?: Date | null;
  deadline?: string;
  files?: string;
  updatedAt?: boolean;
}
