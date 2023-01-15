import { IBase } from './base.interface';

export interface IToken extends IBase {
  tokenId: string;
  accessToken: string;
  refreshToken?: string;
}
