// import { Test, TestingModule } from '@nestjs/testing';
// import axios from 'axios';
// import { url } from 'inspector';
// import { WeatherService } from './weather.service';

// jest.mock('axios')

// describe('WeatherService', () => {
//   let service: WeatherService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [WeatherService],
//     }).compile();

//     service = module.get<WeatherService>(WeatherService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('should',()=>{
//     //arange
//     const cityName = 'Melbourne;
//     const stateCode = '3340';
//     const countryCode = 'AU'

    
//     ler _url;
//     let _options: AxiosRequestingConfig;
//     axios.get = jest.fn ((url, options) => {
//       _url = url;
//       _options = options;
//       return {} as any;
//     })
//     //act
//     service.getLatLonByZip()
//     //assert
//     excepect(_options.params.q).toBe([cityName,stateCode,countryCode].filter((val)=>val).join(','),
//     );
//   });
// });

