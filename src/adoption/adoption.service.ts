import { Adoption } from './entities/adoption.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly repository: Repository<Adoption>,
  ) {}
  create(createAdoptionDto: CreateAdoptionDto) {
    const adoption = this.repository.create(createAdoptionDto);
    return this.repository.save(adoption);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateAdoptionDto: UpdateAdoptionDto) {
    const adoption = await this.repository.preload({
      id: id,
      ...updateAdoptionDto,
    });
    if (!adoption) {
      throw new NotFoundException(`Adoption ${id} not foud`);
    }

    return this.repository.save(adoption);
  }

  async remove(id: string) {
    const adoption = await this.findOne(id);
    return this.repository.remove(adoption);
  }
}
