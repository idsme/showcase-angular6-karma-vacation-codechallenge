import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AirportSearchSectionComponent} from './airports/components/airport-search-section/airport-search-section.component';
import {AirportDetailsSectionComponent} from './airports/components/airport-details-section/airport-details-section.component';
import {AirportsResolverService} from './airports/services/airport-resolver.service';
import {SelectedAirportsResolverService} from './airports/services/selected-airport-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: 'airports', pathMatch: 'full'}, // Redirect to correct url.
  {path: 'airports', loadChildren: './airports/airports.module#AirportsModule'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
