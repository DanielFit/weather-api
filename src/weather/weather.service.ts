import { Injectable } from '@nestjs/common';
import { WeatherResponse } from './models/weather-response';
import { ConfigService } from '@nestjs/config';
import { ConfigToken } from '../configuration';
import axios from 'axios';
import { GeocodingResponse } from './models/geocoding-response';

@Injectable()
export class WeatherService {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly currentWeatherPath = '/data/2.5/weather';
  private readonly geocodingPath = '/geo/1.0/direct';

  constructor(private configService: ConfigService) {
    this.apiKey = configService.get(ConfigToken.apiKey);
    this.baseUrl = configService.get(ConfigToken.baseUrl);

    if (!this.baseUrl) {
      throw new Error('Base url is required');
    }
  }

  async getLatLonByZip(
    cityName: string,
    stateCode: string,
    countryCode: string,
  ): Promise<GeocodingResponse[]> {
    const result = await axios.get<GeocodingResponse[]>(
      `${this.baseUrl}${this.geocodingPath}`,
      {
        params: {
          q: [cityName, stateCode, countryCode].filter((val) => val).join(','),
          appid: this.apiKey,
        },
      },
    );

    return result.data;
  }

  async getWeatherByLatLon(lat: string, lon: string): Promise<WeatherResponse> {
    const result = await axios.get<WeatherResponse>(
      `${this.baseUrl}${this.currentWeatherPath}`,
      {
        params: {
          lat,
          lon,
          appid: this.apiKey,
        },
      },
    );

    return result.data;
  }
}
