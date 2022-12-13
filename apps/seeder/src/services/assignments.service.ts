import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IAssignment } from '@omnihost/interfaces';
import { Assignment } from '@omnihost/models';
import { Repository } from 'typeorm';
import { assignments } from '../constants/assignments.constants';

@Injectable()
export class AssignmentsSeederService {
  constructor(
    @InjectRepository(Assignment)
    private readonly repo: Repository<Assignment>
  ) {}

  create(): Array<Promise<Assignment>> {
    return assignments.map(async (assignment: IAssignment) => {
      try {
        return await this.repo.save(assignment);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}
