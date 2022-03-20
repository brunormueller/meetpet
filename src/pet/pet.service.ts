import { Pet } from './entities/pet.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private readonly repository: Repository<Pet>,
  ) {}

  create(createPetDto: CreatePetDto) {
    const pet = this.repository.create(createPetDto);
    return this.repository.save(pet);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    const pet = await this.repository.preload({
      id: id,
      ...updatePetDto,
    });
    if (!pet) {
      throw new NotFoundException(`Pet ${id} not found`);
    }

    return this.repository.save(Pet);
  }

  async remove(id: string) {
    const pet = await this.findOne(id);
    return this.repository.remove(pet);
  }
}
