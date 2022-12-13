import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from '@omnihost/interfaces';
import { User } from '@omnihost/models';
import { Repository } from 'typeorm';
import { users } from '../constants/users.constant';

@Injectable()
export class UsersSeederService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>
  ) {}

  create(): Array<Promise<User>> {
    return users.map(async (entity: IUser) => {
      try {
        return await this.repo.save(entity);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
}
