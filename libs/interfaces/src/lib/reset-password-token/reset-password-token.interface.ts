import { ICompletedAt } from '../base.interface';

export interface IResetPasswordToken extends ICompletedAt {
  resetPasswordTokenId: string;
  userId: string;
  expiresAt: Date;
}
