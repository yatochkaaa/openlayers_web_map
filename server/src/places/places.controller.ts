import { Controller, Post, Body, Get } from '@nestjs/common';
import { PlaceDto } from './dto/place.dto';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Post()
  create(@Body() placeDto: PlaceDto) {
    return this.placesService.createPlace(placeDto);
  }

  @Get()
  getAll() {
    return this.placesService.getAllPlaces();
  }
}
