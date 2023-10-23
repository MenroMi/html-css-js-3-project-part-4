import {create} from 'zustand';
import type {
  ICountriesSlice,
  ICountriesStateSlice,
  IVisibleCountriesSlice,
} from '../types/zustandTypes';

import {
  createCountries,
  createCountriesStateSlice,
  createVisibleCountriesSlice,
} from './slices';

const useCountriesStore = create<
  ICountriesSlice & ICountriesStateSlice & IVisibleCountriesSlice
>()((...a) => ({
  ...createCountries(...a),
  ...createCountriesStateSlice(...a),
  ...createVisibleCountriesSlice(...a),
}));

export default useCountriesStore;

/*

  import {create} from 'zustand';

interface CountriesStore {
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
  setIsError: () => void;
  setIsLoading: () => void;
  setIsFetched: () => void;
}

const useStateCountriesStore = create<CountriesStore>()(set => ({
  isError: false,
  isFetched: false,
  isLoading: false,
  setIsError: () =>
    set(() => ({isLoading: false, isFetched: false, isError: true})),
  setIsLoading: () =>
    set(() => ({isLoading: true, isFetched: false, isError: false})),
  setIsFetched: () =>
    set(() => ({isLoading: false, isFetched: true, isError: false})),
}));

export default useStateCountriesStore;

*/
