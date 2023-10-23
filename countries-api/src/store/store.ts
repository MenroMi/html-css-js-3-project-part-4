// libs
import {create} from 'zustand';

// slices
import {
  createCountries,
  createCountriesStateSlice,
  createVisibleCountriesSlice,
} from './slices';

// types
import type {
  ICountriesSlice,
  ICountriesStateSlice,
  IVisibleCountriesSlice,
} from '../types/zustandSliceTypes';

// store
const useCountriesStore = create<
  ICountriesSlice & ICountriesStateSlice & IVisibleCountriesSlice
>()((...a) => ({
  ...createCountries(...a),
  ...createCountriesStateSlice(...a),
  ...createVisibleCountriesSlice(...a),
}));

export default useCountriesStore;
