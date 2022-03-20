import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  controllers: [BreedsController],
  providers: [BreedsService],
})
export class BreedsModule {}
