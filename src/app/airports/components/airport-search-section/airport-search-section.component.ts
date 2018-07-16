import {Component, ViewChild} from '@angular/core';
import {SearchAirportInputComponent} from '../search-airport-input/search-airport-input.component';
import {ActivatedRoute, Router} from '@angular/router';
import {AirportHelper} from '../../helpers/airport-helper';
import {IAirport} from '../../api/airports/i-airport';
import {AirportDataService} from '../../services/airport-data.service';



@Component({
  selector: 'klm-airport-search-section',
  templateUrl: './airport-search-section.component.html',
  styleUrls: ['./airport-search-section.component.css']
})

/**
 * From this section whe can search for a destination
 * If more then three destinations are found show max 3
 */
export class AirportSearchSectionComponent {

  @ViewChild(SearchAirportInputComponent)
  searchAirportInputComponent;


  public filteredAirports: IAirport[];

  constructor(private router: Router, private airportDataService: AirportDataService) {
  }

  /**
   * navigate to the route which show the Airport Details view.
   * @param {string} searchTerm aiport to select
   */
  viewSelectedAirportDetails(searchTerm: string = '') {
    console.log(`AirportSearchSectionComponent>selectAirport>Search Term>`, searchTerm);

    // Check if name is valid search term name
    // Loop through airports until found then.. navigate to airports details.
    this.router.navigate([`airports/${searchTerm}`]);
  }

  /**
   * OnClick of Aiport label set input field value of search input box
   * @param {string} name label name to set search input value to.
   */
  setAirportNameIntoInput(name: string) {

    // Set value of search input tag to this value.
    this.searchAirportInputComponent.airportSearchTermFormInput.nativeElement.value = name;
  }

  /**
   * On key press filter airports based on event emmitted, then take only first three results
   * @param {string} airportNameSearch
   */
  filterAirportsOnName(airportNameSearch: string) {

    this.airportDataService.data.subscribe((airports: IAirport[]) => {
      this.filteredAirports = AirportHelper.filterByAirportName(airports, airportNameSearch);
      console.log(`Filtering airport based on input>`, airportNameSearch);
      console.log(`Filtered Results>`, this.filteredAirports);
      //And show only first three found.
      this.filteredAirports = this.filteredAirports.slice(0, 3);
    });

  }
}


