import type {StateCreator} from 'zustand';
import type {
  ICountriesSlice,
  ICountriesStateSlice,
  IVisibleCountriesSlice,
} from '../../types/zustandTypes';
import {ICountry} from '../../types';
import {onDelay} from '../../helpers';
import {PAGE_SIZE} from '../../constants';

export const createVisibleCountriesSlice: StateCreator<
  ICountriesSlice & IVisibleCountriesSlice & ICountriesStateSlice,
  [],
  [],
  IVisibleCountriesSlice
> = (set, get) => ({
  visibleCountries: [],
  getNextBunchCountries: async (inputData?: ICountry[]): Promise<void> => {
    get().setIsLoading();
    const nextIdx = get().visibleCountries.length;
    const countriesArr = inputData || get().countries;
    console.log(countriesArr);

    await onDelay(1000).then(() => {}); // fake delay for request

    if (countriesArr.length === 0) {
      get().setIsFetched();
      return;
    }

    if (nextIdx >= countriesArr.length) {
      get().setIsFetched();
      return;
    }

    const nextCountries: ICountry[] = countriesArr.slice(
      nextIdx,
      nextIdx + PAGE_SIZE,
    );
    set({visibleCountries: [...get().visibleCountries, ...nextCountries]});
    get().setIsFetched();
  },
  onSearch: async () => {},
});
