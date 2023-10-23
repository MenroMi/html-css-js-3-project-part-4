// services
import {getCountries} from '../../services';

// helpers
import {onTakeUniqueRegions} from '../../helpers';

// constants
import {FIELD_COUNTRIES} from '../../constants';

// types
import type {StateCreator} from 'zustand';
import type {ICountry} from '../../types';
import type {
  ICountriesSlice,
  ICountriesStateSlice,
  IVisibleCountriesSlice,
} from '../../types/zustandSliceTypes';

export const createCountries: StateCreator<
  ICountriesSlice & ICountriesStateSlice & IVisibleCountriesSlice,
  [],
  [],
  ICountriesSlice
> = (set, get) => ({
  regions: [],
  countries: [],
  filteredCountries: [],
  searchedCountries: [],
  requestCountries: async () => {
    const countries: ICountry[] | Error = await getCountries();

    if (!Array.isArray(countries)) {
      get().setIsError();
      return;
    }

    const regions = onTakeUniqueRegions(countries);

    set({
      countries,
      regions:
        regions.length === 0
          ? "Regions aren't available."
          : ['All', ...regions],
    });
    get().setIsFetched();
    get().getNextBunchCountries(FIELD_COUNTRIES.DEFAULT);
  },
  requestCountriesByFilter: async (region: string) => {
    const countries: ICountry[] = get().countries;

    if (!Array.isArray(countries)) {
      get().setIsError();
      return;
    }

    const filteredCountriesByFilter =
      region.toLowerCase() === 'all'
        ? countries
        : countries.filter(c => c.region === region);

    set({
      visibleCountries: [],
      filteredCountries: [...filteredCountriesByFilter],
      searchedCountries: [],
    });
    get().setIsFetched();
    get().getNextBunchCountries(FIELD_COUNTRIES.FILTER);
  },
  requestCountriesByName: async (name: string) => {
    let countries: ICountry[] = get().countries;

    if (!Array.isArray(countries)) {
      get().setIsError();
      return;
    }

    countries = countries.filter(c =>
      c.name.toLowerCase().startsWith(name.toLowerCase()),
    );

    set({
      visibleCountries: [],
      searchedCountries: [...countries],
      filteredCountries: [],
    });
    get().setIsFetched();
    get().getNextBunchCountries(FIELD_COUNTRIES.SEARCH);
  },
});
