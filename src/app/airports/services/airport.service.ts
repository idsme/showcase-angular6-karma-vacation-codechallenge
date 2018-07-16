import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IAirport} from '../api/airports/i-airport';
import {IAirportsWrapper} from '../api/airports/i-airports-wrapper';
import {AirportHelper} from '../helpers/airport-helper';


@Injectable({
  providedIn: 'root'
})
export class AirportService {
  constructor(private http: HttpClient) { }

  //TODO IDSME Rework this so below reuses this method and can be reused and seperately tested, have it sets it's url via env vars.
  get<T>(): Observable<T> {
      return this.http.get<T>(`/assets/airports.json`);
  }

  getAirports(): Observable<IAirport[]> {
    return this.http.get<IAirportsWrapper>(`/assets/airports.json`)
      .pipe(map(({airports}) => AirportHelper.convertAirportWrapperArrayToAirportArray(airports))
    );

  }
}
