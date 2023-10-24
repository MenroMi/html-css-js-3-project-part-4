import type {ICountry, ICountryProps} from '../types';

// for pagination
export const PAGE_SIZE: number = 8;

// for determine current using elements list
export enum FIELD_COUNTRIES {
  FILTER = 'fitler',
  SEARCH = 'search',
  DEFAULT = '',
}

export const countryProps: ICountryProps<keyof ICountry>[] = [
  {
    id: 'p1',
    title: 'Native Name',
    prop: 'nativeName',
  },
  {
    id: 'p2',
    title: 'Population',
    position: 'col-start-1 row-start-2',
    prop: 'population',
  },
  {
    id: 'p3',
    title: 'Region',
    position: 'col-start-1 row-start-3',
    prop: 'region',
  },
  {
    id: 'p4',
    title: 'Sub Region',
    position: 'col-start-1 row-start-4',
    prop: 'subregion',
  },
  {
    id: 'p5',
    title: 'Capital',
    position: 'col-start-1 row-start-5',
    prop: 'capital',
  },
  {
    id: 'p6',
    title: 'Top Level Domain',
    prop: 'topLevelDomain',
  },
  {
    id: 'p7',
    title: 'Currencies',
    prop: 'currencies',
  },
  {
    id: 'p8',
    title: 'Languages',
    prop: 'languages',
  },
];
