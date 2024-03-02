import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../common/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    // injectando el schema a usermodel
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersModel.create(createUserDto);
  }

  async findAll() {
    const allUsers = await this.usersModel.find();
    return allUsers;
  }

  async findOne(id: string) {
    return await this.usersModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.usersModel.findByIdAndDelete(id);
  }
}
