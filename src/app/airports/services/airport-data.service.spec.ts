import { TestBed, inject } from '@angular/core/testing';
import { AirportDataService } from './airport-data.service';
import {IAirport} from '../api/airports/i-airport';


describe('AirportDataService', () => {

  const airport1: IAirport = {
    'code': 'AAA',
    'name': 'Aeropuerto AAA',
    'city': {
      'code': 'CURA',
      'name': 'CuracaoA'
    }
  };

  const airport2: IAirport = {
    'code': 'BBB',
    'name': 'Aeropuerto BBB',
    'city': {
      'code': 'CURB',
      'name': 'CuracaoB'
    }
  };

  const airport3: IAirport = {
    'code': 'CCC',
    'name': 'Aeropuerto CCC',
    'city': {
      'code': 'CURB',
      'name': 'CuracaoB'
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirportDataService]
    });
  });

  it('should be created', inject([AirportDataService], (service: AirportDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to retrieve latest data first time', inject([AirportDataService], (service: AirportDataService) => {

    service.updatedDataSelection([airport1, airport2]);

    service.data.subscribe((data) => {
      expect(data.length).toEqual(2);
      expect(data[0].name).toEqual('Aeropuerto AAA');
      expect(data[1].name).toEqual('Aeropuerto BBB');
    });

  }));

  it('should always be able to retriev the latest value even if overridden multiple times.', inject([AirportDataService], (service: AirportDataService) => {

    // Should always have the latest value.
    service.updatedDataSelection([airport1, airport2]);
    service.updatedDataSelection([airport2, airport3]);

    service.data.subscribe((data) => {
      expect(data.length).toEqual(2);
      expect(data[0].name).toEqual('Aeropuerto BBB');
      expect(data[1].name).toEqual('Aeropuerto CCC');
    });

  }));
});
