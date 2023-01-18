import { ICompletedAt } from '../base.interface';

export interface IBike extends ICompletedAt {
  bikeId: string;
  nrOfBikes?: string;
  pickUpTime?: Date | null;
  name?: string;
  room?: string;
  reservedBy?: string;
  bikeFormCompleted?: boolean;
  comments?: string;
  bbOut?: string;
  bbIn?: string;
  timeOut?: Date | null;
  timeIn?: Date | null;
}

export interface ICreateBikeRequest {
  nrOfBikes?: string;
  pickUpTime?: Date | null;
  name?: string;
  room?: string;
  reservedBy?: string;
  bikeFormCompleted?: boolean;
  comments?: string;
  completedAt?: Date | null;
  bbOut?: string;
  bbIn?: string;
  timeOut?: Date | null;
  timeIn?: Date | null;
}

export interface IUpdateBikeRequest {
  nrOfBikes?: string;
  pickUpTime?: Date | null;
  name?: string;
  room?: string;
  reservedBy?: string;
  bikeFormCompleted?: boolean;
  comments?: string;
  completedAt?: Date | null;
  bbOut?: string;
  bbIn?: string;
  timeOut?: Date | null;
  timeIn?: Date | null;
}
