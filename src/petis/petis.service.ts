import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Peti } from './entities/peti.entity';
import { CreatePetiDto } from './dto/create-peti.dto';
import { UpdatePetiDto } from './dto/update-peti.dto';

@Injectable()
export class PetisService {
  constructor(
    @InjectRepository(Peti)
    private petisRepository: Repository<Peti>,
  ) { }

  async create(createPetiDto: CreatePetiDto) {
    const user = this.petisRepository.create(createPetiDto);

    await this.petisRepository.save(createPetiDto);

    return user;
  }

  async findAll() {
    return await this.petisRepository.find();
  }

  async findOne(id: number) {
    return await this.petisRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updatePetiDto: UpdatePetiDto) {
    await this.petisRepository.update({ id }, updatePetiDto);

    return await this.petisRepository.findOne({ id });
  }

  async remove(id: number) {
    await this.petisRepository.delete({ id });

    return { deleted: true };
  }
}
