import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAirport} from '../api/airports/i-airport';


@Injectable({
  providedIn: 'root'
})
/**
 * Update-able cashed version of the set of airports retrieved.
 */
export class AirportDataService {

  private dataSource = new BehaviorSubject<IAirport[]>(null);
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(data: IAirport[]) {
    this.dataSource.next(data);
  }
}
