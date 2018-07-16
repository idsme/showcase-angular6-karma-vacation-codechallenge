import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'klm-search-airport-input',
  templateUrl: './search-airport-input.component.html',
  styleUrls: ['./search-airport-input.component.css']
})
export class SearchAirportInputComponent {

  @ViewChild('airportsearchterm') airportSearchTermFormInput: ElementRef;
  @Output() searchTerm = new EventEmitter<String>();

  constructor() {}

  onInputChange(airportNameSearch: string) {
    this.searchTerm.emit(airportNameSearch);
    console.log(`Emmitted searchterm event>${airportNameSearch}`);
  }
}
