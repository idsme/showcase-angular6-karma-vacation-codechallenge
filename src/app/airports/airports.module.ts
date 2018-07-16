import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchAirportInputComponent} from './components/search-airport-input/search-airport-input.component';
import {AirportDetailsSectionComponent} from './components/airport-details-section/airport-details-section.component';
import {AirportSearchSectionComponent} from './components/airport-search-section/airport-search-section.component';
import {RouterModule, Routes} from '@angular/router';
import {SelectedAirportsResolverService} from './services/selected-airport-resolver.service';
import {AirportsResolverService} from './services/airport-resolver.service';

// Org from recepten module
export const ROUTES: Routes = [
  {
    path: 'airports',
    component: AirportSearchSectionComponent, resolve : { resolvedAirports: AirportsResolverService }
  },
  {
    path: 'airports/:name',
    component: AirportDetailsSectionComponent,  resolve : { selectedAirport: SelectedAirportsResolverService },
  },
];



@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
  declarations: [
    AirportDetailsSectionComponent,
    AirportSearchSectionComponent,
    SearchAirportInputComponent]
})
export class AirportsModule { }
