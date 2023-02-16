import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAssignment } from '@omnihost/interfaces';
import { Assignment } from '@omnihost/models';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { assignmentComments } from '../constants/assignments.constant';
import {
  bbAssignmentRequestedBy,
  bbAssignmentTasks,
  bellBoyInitials,
  rooms,
} from '../constants/dropdown-options';
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
        const morningDate = new Date(day.setHours(getRandomInt(6, 12), getRandomInt(0, 60)));
        const eveningDate = new Date(day.setHours(getRandomInt(13, 22), getRandomInt(0, 60)));
        const task = getRandom(bbAssignmentTasks);
        const requestedBy = getRandom(bbAssignmentRequestedBy);
        data.push({
          assignmentId: uuidv4(),
          room: getRandom(rooms),
          task: task,
          comments:
            task === 'Other' || requestedBy === 'Other' ? getRandom(assignmentComments) : null,
          requestedBy: requestedBy,
          performedBy: getRandom(bellBoyInitials),
          requestedAt: morningDate,
          createdAt: morningDate,
          completedAt: getRandomBoolean() ? eveningDate : null,
        });
      }
    }

    return data;
  }
}
