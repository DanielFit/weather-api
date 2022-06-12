import { Injectable } from '@nestjs/common';
import { request } from 'express';
import fetch from 'node-fetch';

var zip: string = 'E14'



@Injectable()
export class AppService {
  async getWeather(): Promise<any> {

    const response1 = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip='+zip+',GB&appid=83f5b36d6052efe78881e01afe2bc295');
    const data1 = await response1.json();

    const latitude= data1.lat
    const longitude=data1.lon

    const response2 = await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=83f5b36d6052efe78881e01afe2bc295', {method: 'POST', body: 'a=1'});
    const data2 = await response2.json();

    console.log(data2);
    return data2;
  }
}
