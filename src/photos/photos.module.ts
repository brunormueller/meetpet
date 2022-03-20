import { Photo } from './entities/photo.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
