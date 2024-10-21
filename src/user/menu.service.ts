import { Injectable } from '@nestjs/common';
import { CreateMenuDto as CreateMenuDTO } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { User } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createMenuDto: CreateMenuDTO): Promise<User> {
    const userData = await this.userRepository.create(createMenuDto);
    return this.userRepository.save(userData);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateMenuDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
