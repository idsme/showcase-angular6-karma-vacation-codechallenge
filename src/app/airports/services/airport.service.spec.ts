import { TestBed, inject } from '@angular/core/testing';

import { AirportService } from './airport.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {IAirport} from '../api/airports/i-airport';
import {IAirportsWrapper} from '../api/airports/i-airports-wrapper';

describe('AirportService', () => {


  const airportsWrapper: IAirportsWrapper = {
      'airports': [
        {
          'airport': {
            'code': 'CUR',
            'name': 'Aeropuerto Hato',
            'city': {
              'code': 'CUR',
              'name': 'Curacao'
            }
          }
        },
        {
          'airport': {
            'code': 'CWL',
            'name': 'Cardiff-Wales IAirport',
            'city': {
              'code': 'CWL',
              'name': 'Cardiff'
            }
          }
        }
      ]
    };

        beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AirportService]
    });
  });


  it('should get /assets/airports.json 1 time and return 2 entities', inject([AirportService, HttpTestingController], (service: AirportService, httpTestingController: HttpTestingController) => {
    service.get().subscribe( (data: IAirportsWrapper) => {
      console.log(data);
      expect(data.airports.length).toEqual(2);
    });

    const req = httpTestingController.expectOne('/assets/airports.json');
    expect(service).toBeTruthy();

    req.flush(<IAirportsWrapper> airportsWrapper);

  }));



});
