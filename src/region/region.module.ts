import { Region } from './entities/region.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Region])],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
