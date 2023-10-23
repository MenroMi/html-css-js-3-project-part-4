import {ICountry} from './';

export interface ICountriesSlice {
  countries: ICountry[];
  regions: string[] | string;
  request: () => Promise<void>;
  requestCountriesByFilter: (region: string) => Promise<void>;
}

export interface IVisibleCountriesSlice {
  visibleCountries: ICountry[];
  getNextBunchCountries: (inputData?: ICountry[]) => Promise<void>;
  onSearch: () => Promise<void>;
}

export interface ICountriesStateSlice {
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
  setIsError: () => void;
  setIsLoading: () => void;
  setIsFetched: () => void;
}
