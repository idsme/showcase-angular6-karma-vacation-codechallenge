import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportSearchSectionComponent } from './airport-search-section.component';
import {SearchAirportInputComponent} from '../search-airport-input/search-airport-input.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AirportDataService} from '../../services/airport-data.service';

describe('AirportSearchSectionComponent', () => {
  let component: AirportSearchSectionComponent;
  let fixture: ComponentFixture<AirportSearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AirportSearchSectionComponent, SearchAirportInputComponent ],
      providers: [ AirportDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Running');
    expect(component).toBeTruthy();
  });
});
