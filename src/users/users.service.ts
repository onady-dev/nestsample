import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './entities/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) { }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findOne(id: number) {
    return `This action returns a #${id} user findOne`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
