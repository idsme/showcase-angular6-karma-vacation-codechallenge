import { AirportsModule } from './airports.module';

describe('AirportsModule', () => {
  let airportModule: AirportsModule;

  beforeEach(() => {
    airportModule = new AirportsModule();
  });

  it('should create an instance', () => {
    expect(airportModule).toBeTruthy();
  });
});
