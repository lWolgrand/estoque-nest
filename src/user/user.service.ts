import { Inject, Injectable } from '@nestjs/common';
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
    const userData = await this.userRepository.create<User>(createUserDto);
    userData.password = await bcrypt.hash(userData.password, 10);
    return await userData.save();

   
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
} // UserService
