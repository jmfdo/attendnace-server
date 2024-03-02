import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    try {
      const hash = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.password = hash;
      await this.usersService.create(createUserDto);
      return { message: `Usuario creado exitosamente` };
    } catch (error) {
      if (error.code === 11000) {
        const key = Object.keys(error.keyValue)[0];
        const value = error.keyValue[key];
        throw new ConflictException(`${value} ya fúe registrado`);
      }
      throw new ConflictException();
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(id);
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new ConflictException('Error de petición');
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (isEmptyObject(updateUserDto))
      throw new BadRequestException('Falta cuerpo');
    try {
      const user = await this.usersService.update(id, updateUserDto);
      if (!user) {
        throw new NotFoundException('Ususario no encontrado');
      }
      return { message: 'Usuario Actualizado' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        if (error instanceof NotFoundException) {
          throw error;
        } else {
          throw new ConflictException('Error de petición');
        }
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const user = await this.usersService.remove(id);
      if (!user) {
        throw new NotFoundException('Ususario no encontrado');
      }
      return { message: 'Usuario eliminado' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new ConflictException('Error de petición');
      }
    }
  }
}

function isEmptyObject(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}
