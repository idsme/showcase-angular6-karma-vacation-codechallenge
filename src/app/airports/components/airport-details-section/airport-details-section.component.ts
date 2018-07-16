import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IAirport} from '../../api/airports/i-airport';
import {AirportDataService} from '../../services/airport-data.service';

@Component({
  selector: 'klm-airport-details-section',
  templateUrl: './airport-details-section.component.html',
  styleUrls: ['./airport-details-section.component.css']
})

export class AirportDetailsSectionComponent implements OnInit {

  @Input()
  airport: IAirport;

  constructor(private route: ActivatedRoute, private airportDataService: AirportDataService) {}

  ngOnInit() {
    this.airport = this.route.snapshot.data['selectedAirport'];
  }
}


