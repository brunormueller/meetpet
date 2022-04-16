import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashPassword = await bcrypt.hashSync(createUserDto.password, 8);
    createUserDto.password = hashPassword;
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findOneById(id: string): Promise<User> {
    return await this.repository.findOne(id);
  }

  async findOneByLogin(login: string): Promise<User | undefined> {
    return await this.repository.findOne({ login: login });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.repository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.repository.save(User);
  }

  async remove(id: string) {
    const user = await this.findOneById(id);
    return this.repository.remove(user);
  }
}
