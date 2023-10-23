// helpers
import {onDelay} from '../../helpers';

// constants
import {FIELD_COUNTRIES, PAGE_SIZE} from '../../constants';

// types
import type {StateCreator} from 'zustand';
import type {
  ICountriesSlice,
  ICountriesStateSlice,
  IVisibleCountriesSlice,
} from '../../types/zustandSliceTypes';
import type {ICountry} from '../../types';

export const createVisibleCountriesSlice: StateCreator<
  ICountriesSlice & IVisibleCountriesSlice & ICountriesStateSlice,
  [],
  [],
  IVisibleCountriesSlice
> = (set, get) => ({
  visibleCountries: [],
  getNextBunchCountries: async (
    nameData: FIELD_COUNTRIES = FIELD_COUNTRIES.DEFAULT,
  ): Promise<void> => {
    get().setIsLoading();
    get().setIsLastPage(false);

    const nextId = get().visibleCountries.length;
    let countriesArr: ICountry[];

    switch (nameData) {
      case FIELD_COUNTRIES.FILTER:
        countriesArr = get().filteredCountries;
        break;
      case FIELD_COUNTRIES.SEARCH:
        countriesArr = get().searchedCountries;
        break;
      default:
        countriesArr = get().countries;
        break;
    }

    await onDelay(500).then(() => {}); // fake delay for request

    if (countriesArr.length === 0) {
      get().setIsFetched();
      get().setIsLastPage(true);
      return;
    }

    if (nextId >= countriesArr.length) {
      // check the last page
      get().setIsFetched();
      get().setIsLastPage(true);
      return;
    }
    const nextCountries: ICountry[] = countriesArr.slice(
      nextId,
      nextId + PAGE_SIZE,
    );
    set({visibleCountries: [...get().visibleCountries, ...nextCountries]});
    get().setIsFetched();
  },
});
