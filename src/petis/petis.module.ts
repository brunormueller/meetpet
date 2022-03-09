import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetisService } from './petis.service';
import { PetisController } from './petis.controller';
import { Peti } from './entities/peti.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Peti])],
  controllers: [PetisController],
  providers: [PetisService]
})
export class PetisModule { }
