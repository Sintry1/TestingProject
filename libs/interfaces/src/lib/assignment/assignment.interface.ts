import { ICompletedAt } from '../base.interface';

export interface IAssignment extends ICompletedAt {
  assignmentId: string;
  room?: string;
  task?: string;
  comments?: string;
  requestedBy: string;
  performedBy?: string;
  requestedAt: Date;
}

export interface ICreateAssignmentRequest {
  room?: string;
  task?: string;
  comments?: string;
  requestedBy: string;
  performedBy?: string;
  requestedAt: Date;
  completedAt?: Date | null;
}

export interface IUpdateAssignmentRequest {
  room?: string;
  task?: string;
  comments?: string;
  requestedBy?: string;
  performedBy?: string;
  requestedAt?: Date;
  completedAt?: Date | null;
}
