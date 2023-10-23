import {FIELD_COUNTRIES} from '../constants';
import {ICountry} from '.';

export interface ICountriesSlice {
  countries: ICountry[];
  filteredCountries: ICountry[];
  searchedCountries: ICountry[];
  regions: string[] | string;
  requestCountries: () => Promise<void>;
  requestCountriesByFilter: (region: string) => Promise<void>;
  requestCountriesByName: (name: string) => Promise<void>;
}

export interface IVisibleCountriesSlice {
  visibleCountries: ICountry[];
  getNextBunchCountries: (nameData: FIELD_COUNTRIES) => Promise<void>;
}

export interface ICountriesStateSlice {
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
  isLastPage: boolean;
  isCanGoUp: boolean;
  setIsError: () => void;
  setIsLoading: () => void;
  setIsFetched: () => void;
  setIsLastPage: (isLastPage: boolean) => void;
  setIsCanGoUp: (isCanGoUp: boolean) => void;
}
