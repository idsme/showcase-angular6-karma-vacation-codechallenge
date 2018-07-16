import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDetailsSectionComponent } from './airport-details-section.component';

describe('AirportDetailsSectionComponent', () => {
  let component: AirportDetailsSectionComponent;
  let fixture: ComponentFixture<AirportDetailsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportDetailsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
