import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAssignment } from '@omnihost/interfaces';
import { Assignment } from '@omnihost/models';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import {
  assignmentCommentsRA,
  assignmentCommentsRM,
  assignmentTask,
  assignmentRequestedBy,
} from '../constants/assignments.constant';
import { bellBoyInitials, rooms } from '../constants/dropdown-options';
import { getRandom, getRandomBoolean, getRandomInt } from './utils.service';

@Injectable()
export class AssignmentsSeederService {
  constructor(
    @InjectRepository(Assignment)
    private readonly repo: Repository<Assignment>
  ) {}

  create(): Array<Promise<Assignment>> {
    return this.generate().map(async (assignment: IAssignment) => {
      try {
        return await this.repo.save(assignment);
      } catch (error) {
        throw new Error(error);
      }
    });
  }

  generate() {
    // Control variables
    const entriesPerDay = 12;
    const entriesPerDayRandomFactor = 3; // random +/- value for entires

    // Setup the dates for the period of data generation
    const startDate = new Date(Date.now());
    startDate.setMonth(startDate.getMonth() - 6); // day six months in the past
    const endDate = new Date(Date.now());
    endDate.setMonth(endDate.getMonth() + 2); // day 2 months in the future

    // Generate the data
    const data: IAssignment[] = [];
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      const entiresMultiplier = getRandomBoolean() ? -1 : 1;
      const entries =
        entriesPerDay + getRandomInt(0, entriesPerDayRandomFactor) * entiresMultiplier;
      for (let i = 0; i < entries; i++) {
        const assignmentDate = new Date(day.setHours(getRandomInt(10, 21), getRandomInt(0, 60)));
        const isCompleted = Math.random() < 0.9;
        const task = getRandom(assignmentTask);
        const requestedBy = getRandom(assignmentRequestedBy);
        const completedAt = isCompleted
          ? new Date(assignmentDate.getTime() + getRandomInt(10, 30) * 60 * 1000)
          : null;
        data.push({
          assignmentId: uuidv4(),
          room: getRandom(rooms),
          task: task,
          comments:
            task === 'RA' ? getRandom(assignmentCommentsRA) : getRandom(assignmentCommentsRM),
          requestedBy: requestedBy,
          performedBy: isCompleted ? getRandom(bellBoyInitials) : null,
          requestedAt: assignmentDate,
          createdAt: new Date(assignmentDate.getTime() + getRandomInt(3, 30) * 60 * 1000),
          completedAt: completedAt,
        });
      }
    }

    return data;
  }
}
