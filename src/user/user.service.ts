import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: CreateUserDto) {
    return this.usersRepository.insert(user)
  }

  findAll() {
    return this.usersRepository.findAndCount();
  }

  findOne(id: number) {
   return this.usersRepository.findOne(id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id,updateUserDto)
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  async hashPassword(password: string){
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
