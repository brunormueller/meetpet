import { Breed } from './entities/breed.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(Breed) private readonly repository: Repository<Breed>,
  ) {}

  create(createBreedDto: CreateBreedDto) {
    const breed = this.repository.create(createBreedDto);
    return this.repository.save(breed);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateBreedDto: UpdateBreedDto): Promise<Breed> {
    const breed = await this.repository.preload({
      id: id,
      ...updateBreedDto,
    });
    if (!breed) {
      throw new NotFoundException(`Breed ${id} not found`);
    }

    return this.repository.save(Breed);
  }

  async remove(id: string) {
    const breed = await this.findOne(id);
    return this.repository.remove(breed);
  }
}
