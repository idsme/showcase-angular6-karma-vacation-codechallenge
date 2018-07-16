import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAirportInputComponent } from './search-airport-input.component';

describe('SearchAirportInputComponent', () => {
  let component: SearchAirportInputComponent;
  let fixture: ComponentFixture<SearchAirportInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAirportInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAirportInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
