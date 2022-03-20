import { Photo } from './entities/photo.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private readonly repository: Repository<Photo>,
  ) {}
  create(createPhotoDto: CreatePhotoDto) {
    const photo = this.repository.create(createPhotoDto);
    return this.repository.save(photo);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updatePhotoDto: UpdatePhotoDto) {
    const photo = await this.repository.preload({
      id: id,
      ...updatePhotoDto,
    });
    return this.repository.save(photo);
  }

  async remove(id: string) {
    const photo = await this.findOne(id);
    return this.repository.remove(photo);
  }
}
