import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import { BreedsModule } from './breeds/breeds.module';
import { PetModule } from './pet/pet.module';
import { PhotosModule } from './photos/photos.module';
import { RegionModule } from './region/region.module';
import { AdoptionModule } from './adoption/adoption.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }),
    UserModule,
    BreedsModule,
    PetModule,
    PhotosModule,
    RegionModule,
    AdoptionModule,
  ],
})
export class AppModule {}
