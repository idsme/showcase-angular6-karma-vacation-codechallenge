import {ICity} from './i-city';

export interface IAirport {
  code: string;
  name: string;
  city: ICity;
}
