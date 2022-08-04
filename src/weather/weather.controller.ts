import { Controller, Get, Query } from '@nestjs/common';
import { WeatherResponse } from './models/weather-response';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  async getWeatherByLatLon(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ): Promise<WeatherResponse> {
    return await this.weatherService.getWeatherByLatLon(lat, lon);
  }

  @Get('geo')
  async getLatLonByZip(
    @Query('city') city: string,
    @Query('zip') zip: string,
    @Query('country') country: string,
  ): Promise<{ lat: number; lon: number }[]> {
    const result = await this.weatherService.getLatLonByZip(city, zip, country);
    return result.map((val) => ({ lat: val.lat, lon: val.lon }));
  }
}
