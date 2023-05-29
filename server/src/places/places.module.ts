import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Place } from './places.model';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
  imports: [SequelizeModule.forFeature([Place])],
})
export class PlacesModule {}
