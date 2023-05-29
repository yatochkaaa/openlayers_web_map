import { InjectModel } from '@nestjs/sequelize';
import { Place } from './places.model';
import { Injectable } from '@nestjs/common';
import { PlaceDto } from './dto/place.dto';

@Injectable()
export class PlacesService {
  constructor(@InjectModel(Place) private placeRepository: typeof Place) {}

  async createPlace(dto: PlaceDto) {
    const place = await this.placeRepository.create(dto);
    return place;
  }

  async getAllPlaces() {
    const places = await this.placeRepository.findAll();
    return places;
  }
}
