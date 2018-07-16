import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AirportService} from './airport.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AirportDataService} from './airport-data.service';
import {IAirport} from '../api/airports/i-airport';

@Injectable()
export class AirportsResolverService implements Resolve<IAirport[]> {

  constructor(private airportService: AirportService, private airportDataService: AirportDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAirport[]> {
    return this.airportService.getAirports()
      .pipe(
        // First print
        tap((airports: IAirport[]) => console.log(`Data Retrieved in Resolver.`, airports)),
        // Then set in behaviour subject use full for when retrieving the list.. As we don't have to use the router params.. we can just subscribe any where to this.
        tap( (airports: IAirport[]) => this.airportDataService.updatedDataSelection(airports)),
        catchError(err => of(err))
      );
  }
}
