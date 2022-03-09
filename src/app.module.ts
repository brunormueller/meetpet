import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetisModule } from './petis/petis.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PetisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
