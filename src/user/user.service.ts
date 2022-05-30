import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private readonly userRepository: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(createUserDto);
  }

  findAll() {
    return this.userRepository.user.findMany();
  }

  findByEmail(email: string) {
    return this.userRepository.user.findUnique({ where: { email } });
  }
} // UserService
