import { Adoption } from './entities/adoption.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionController } from './adoption.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Adoption])],
  controllers: [AdoptionController],
  providers: [AdoptionService],
})
export class AdoptionModule {}
