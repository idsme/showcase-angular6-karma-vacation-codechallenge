import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SelectedAirportsResolverService} from './airports/services/selected-airport-resolver.service';
import {AirportsResolverService} from './airports/services/airport-resolver.service';
import {AirportService} from './airports/services/airport.service';
import {AirportsModule} from './airports/airports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AirportsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AirportService, AirportsResolverService, SelectedAirportsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
