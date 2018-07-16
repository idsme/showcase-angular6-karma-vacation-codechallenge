import {IAirportsWrapper} from '../api/airports/i-airports-wrapper';
import {IAirport} from '../api/airports/i-airport';
import {AirportHelper} from './airport-helper';

describe('AirportTestHelper', () => {

   const airportsWrapper: IAirportsWrapper = {
      'airports': [
        {
          'airport': {
            'code': 'CUR',
            'name': 'Aeropuerto Hato',
            'city': {
              'code': 'CUR',
              'name': 'Curacao'
            }
          }
        },
        {
          'airport': {
            'code': 'CWL',
            'name': 'Cardiff-Wales IAirport',
            'city': {
              'code': 'CWL',
              'name': 'Cardiff'
            }
          }
        },
        {
          'airport': {
            'code': 'DAR',
            'name': 'DAR',
            'city': {
              'code': 'DAR',
              'name': 'Dar Es Salaam'
            }
          }
        },
        {
          'airport': {
            'code': 'DEL',
            'name': 'Indira Gandhi International',
            'city': {
              'code': 'DEL',
              'name': 'Delhi'
            }
          }
        },
        {
          'airport': {
            'code': 'DMM',
            'name': 'King Fahad International',
            'city': {
              'code': 'DMM',
              'name': 'Dammam'
            }
          }
        },
        {
          'airport': {
            'code': 'DPS',
            'name': 'Denpasar',
            'city': {
              'code': 'DPS',
              'name': 'Denpasar'
            }
          }
        },
        {
          'airport': {
            'code': 'DRS',
            'name': 'Dresden IAirport',
            'city': {
              'code': 'DRS',
              'name': 'Dresden'
            }
          }
        }
      ]
    };

  const convertedAirports = [
    {
      'code': 'DMM',
      'name': 'King Fahad International',
      'city': {
        'code': 'DMM',
        'name': 'Dammam'
      }
    },
    {
      'code': 'DRS',
      'name': 'Dresden IAirport',
      'city': {
        'code': 'DRS',
        'name': 'Dresden'
      }
    },
    {
      'code': 'DPS',
      'name': 'Denpasar',
      'city': {
        'code': 'DPS',
        'name': 'Denpasar'
      }
    },
    {
      'code': 'DEL',
      'name': 'Indira Gandhi International',
      'city': {
        'code': 'DEL',
        'name': 'Delhi'
      }
    }
  ];


  it('should convert IAirportWrapper[] to IAirport[]', function () {

    const convertedAirports = AirportHelper.convertAirportWrapperArrayToAirportArray(airportsWrapper.airports);

    console.log(`Converted <Airport> Results`, convertedAirports);

    expect({});
  });

  // DONE
  it('should filter by Aircraft.name by term A', function () {

    const filteredAirports: IAirport[] = AirportHelper.filterByAirportName(convertedAirports, `A`);
    expect(filteredAirports.length).toEqual(1);

  });

  // DONE
  it('should filter by Aircraft.name by term B', function () {

    const filteredAirports: IAirport[] = AirportHelper.filterByAirportName(convertedAirports, `B`);
    expect(filteredAirports.length).toEqual(0);

  });

  // DONE
  it('should filter by Aircraft.name by term ', function () {

    const filteredAirports: IAirport[] = AirportHelper.filterByAirportName(convertedAirports, `national`);
    expect(filteredAirports.length).toEqual(1);

  });

});
