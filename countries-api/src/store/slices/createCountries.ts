import type {StateCreator} from 'zustand';
import {ICountry} from '../../types';
import {getCountries} from '../../services';
import {
  ICountriesSlice,
  ICountriesStateSlice,
  IVisibleCountriesSlice,
} from '../../types/zustandTypes';
import {onTakeUniqueRegions} from '../../helpers';

export const createCountries: StateCreator<
  ICountriesSlice & ICountriesStateSlice & IVisibleCountriesSlice,
  [],
  [],
  ICountriesSlice
> = (set, get) => ({
  countries: [],
  regions: [],
  request: async () => {
    const countries: ICountry[] | Error = await getCountries();

    if (!Array.isArray(countries)) {
      get().setIsError();
      return;
    }

    const regions = onTakeUniqueRegions(countries);

    set({
      countries,
      regions: regions.length === 0 ? "Regions aren't available." : regions,
    });
    get().setIsFetched();
    get().getNextBunchCountries(countries);
  },
  requestCountriesByFilter: async (region: string) => {
    const countries: ICountry[] | Error = await getCountries();

    if (!Array.isArray(countries)) {
      get().setIsError();
      return;
    }

    const filteredCountriesByFilter = countries.filter(
      c => c.region === region,
    );

    set({visibleCountries: [], countries: [...filteredCountriesByFilter]});
    get().setIsFetched();
    get().getNextBunchCountries(filteredCountriesByFilter);
  },
});
