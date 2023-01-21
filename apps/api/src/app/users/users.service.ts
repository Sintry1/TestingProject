import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ISignupRequest, IUser, Role } from '@omnihost/interfaces';
import { User } from '@omnihost/models';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  /**
   * Find a singular user by their email.
   * @param email email of the user.
   * @returns user or undefined.
   */
  async findOne(email: string): Promise<User | undefined> {
    return this.userRepo.findOneOrFail({ where: { email: email } });
  }
  /**
   * Find a singular user by their id.
   * @param userId id of the user.
   * @returns user or undefined.
   */
  async findOneById(userId: string): Promise<User | undefined> {
    return this.userRepo.findOneOrFail({ where: { userId } });
  }

  /**
   * Update the password of the given user.
   * @param hashedPassword the encoded password.
   * @param userId id of the user to update.
   * @returns updated user.
   */
  async updatePassword(hashedPassword: string, userId: string): Promise<IUser> {
    const user = await this.findOneById(userId);
    user.password = hashedPassword;
    return this.userRepo.save(user);
  }

  /**
   * Create and persist a user entity.
   * @param signupRequestDto information for user creation.
   * @returns created user.
   */
  async create(signupRequestDto: ISignupRequest): Promise<IUser> {
    const { email, password } = signupRequestDto;
    const newUser = this.userRepo.create({
      email: email,
      password: password,
      role: Role.user,
    });
    return this.userRepo.save(newUser);
  }
}
