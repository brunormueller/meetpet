import { Region } from './entities/region.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region) private readonly repository: Repository<Region>,
  ) {}

  create(createRegionDto: CreateRegionDto) {
    const region = this.repository.create(createRegionDto);
    return this.repository.save(region);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    const region = await this.repository.preload({
      id: id,
      ...updateRegionDto,
    });
    if (!region) {
      throw new NotFoundException(`Region ${region} not foud`);
    }

    return this.repository.save(region);
  }

  async remove(id: string) {
    const region = await this.findOne(id);
    return this.repository.remove(region);
  }
}
