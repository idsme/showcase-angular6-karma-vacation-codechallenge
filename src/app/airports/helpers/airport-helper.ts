import {IAirportWrapper} from '../api/airports/i-airport-wrapper';
import {IAirport} from '../api/airports/i-airport';


export class AirportHelper {

  static filterByAirportName(airports: IAirport[], searchTerm: string): IAirport[] {
    const airportsFiltered: IAirport[] = airports.filter(({name}) => {
      console.log('name of airports to compare', name);
      //Output should be array of IAirport Objects that conform to the search term.
      return name.search(searchTerm) > -1;
    });
    return airportsFiltered;
  }


  static convertAirportWrapperArrayToAirportArray(airports: IAirportWrapper[], convertedAiports: IAirport[] = []) {
    airports.forEach((data) => {
      convertedAiports.push(<IAirport>{
        'code': data.airport.code,
        'name': data.airport.name,
        'city': data.airport.city
      });
    });
    return convertedAiports;
  }
}
