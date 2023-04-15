import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AssignmentSortOptions,
  CreateAssignmentRequest,
  SortOrder,
  UpdateAssignmentRequest,
} from '@omnihost/interfaces';
import { Assignment } from '@omnihost/models';
import { Between, ILike, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { filterStatus } from '../utils/query-params.utils';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepo: Repository<Assignment>
  ) {}

  async findAll(from: Date | undefined, to: Date | undefined) {
    let range = undefined;
    if (from && to) {
      range = {
        createdAt: Between<Date>(
          new Date(from.setUTCHours(0, 0, 0, 0)),
          new Date(to.setUTCHours(23, 59, 59, 999))
        ),
      };
    } else if (from) {
      range = { createdAt: MoreThanOrEqual<Date>(new Date(from.setUTCHours(0, 0, 0, 0))) };
    } else if (to) {
      range = { createdAt: LessThanOrEqual<Date>(new Date(to.setUTCHours(23, 59, 59, 999))) };
    }

    return this.assignmentRepo.find({ where: range, order: { createdAt: 'ASC' } });
  }

  async findAllByCreatedAt(
    createdAt: Date,
    status: boolean | undefined,
    room: string | undefined,
    search: string | undefined,
    sortBy: AssignmentSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    const baseConditions = {
      createdAt: Between<Date>(
        new Date(createdAt.setUTCHours(0, 0, 0, 0)),
        new Date(createdAt.setUTCHours(23, 59, 59, 999))
      ),
      completedAt: filterStatus(status),
      room,
    };

    const searchCondition = search ? ILike(`%${search}%`) : undefined;

    return await this.assignmentRepo.find({
      where: [
        { ...baseConditions, task: searchCondition },
        { ...baseConditions, requestedBy: searchCondition },
        { ...baseConditions, performedBy: searchCondition },
        { ...baseConditions, comments: searchCondition },
      ],
      order: this.getSortingConditions(sortBy, sortOrder),
    });
  }

  async createAssignment(assignmentData: CreateAssignmentRequest) {
    return await this.assignmentRepo.save(assignmentData);
  }

  async updateAssignment(assignmentId: string, assignmentData: UpdateAssignmentRequest) {
    const assignment = await this.assignmentRepo.findOneByOrFail({
      assignmentId,
    });

    for (const key in assignmentData) {
      if (Object.prototype.hasOwnProperty.call(assignmentData, key)) {
        assignment[key] = assignmentData[key];
      }
    }

    return await this.assignmentRepo.save(assignment);
  }

  private getSortingConditions(
    sortBy: AssignmentSortOptions | undefined,
    sortOrder: SortOrder | undefined
  ) {
    switch (sortBy) {
      case AssignmentSortOptions.REQUESTED_AT:
        return { requestedAt: sortOrder };
      case AssignmentSortOptions.COMPLETED_AT:
        return { completedAt: sortOrder };
      default:
        return undefined;
    }
  }
}
