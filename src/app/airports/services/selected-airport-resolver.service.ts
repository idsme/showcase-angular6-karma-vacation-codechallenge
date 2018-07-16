import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AirportService} from './airport.service';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {AirportDataService} from './airport-data.service';
import {AirportHelper} from '../helpers/airport-helper';
import {IAirport} from '../api/airports/i-airport';

@Injectable()
export class SelectedAirportsResolverService implements Resolve<IAirport> {

  constructor(private airportService: AirportService, private airportDataService: AirportDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAirport> {
    const selectedAirportName = route.paramMap.get('name');

    return this.airportService.getAirports()
      .pipe(
        // First print
        tap((airports: IAirport[]) => console.log(`Selected AirportData Retrieved in Resolver.`, airports)),
        // Then set in behaviour subject use full for when retrieving the list.. As we don't have to use the router params.. we can just subscribe any where to this.
        tap( (airports: IAirport[]) => this.airportDataService.updatedDataSelection(airports)),
        catchError(err => of(err)),
        map(data => {

          const foundAirport = AirportHelper.filterByAirportName(data, selectedAirportName);
          if (foundAirport.length === 1) {
            return foundAirport[0];
          } else {
            throw Error(`Length of Airport Array was different from 1, ${foundAirport}`);
          }
        })
      );
  }
}
