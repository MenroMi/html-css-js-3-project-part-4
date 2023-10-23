import type {StateCreator} from 'zustand';
import {ICountriesStateSlice} from '../../types/zustandSliceTypes';

export const createCountriesStateSlice: StateCreator<
  ICountriesStateSlice,
  [],
  [],
  ICountriesStateSlice
> = set => ({
  isError: false,
  isFetched: false,
  isLoading: false,
  isLastPage: false,
  isCanGoUp: false,
  setIsError: () =>
    set(() => ({isLoading: false, isFetched: false, isError: true})),
  setIsLoading: () =>
    set(() => ({isLoading: true, isFetched: false, isError: false})),
  setIsFetched: () =>
    set(() => ({isLoading: false, isFetched: true, isError: false})),
  setIsLastPage: (isLastPage: boolean) => set(() => ({isLastPage})),
  setIsCanGoUp: (isCanGoUp: boolean) => set(() => ({isCanGoUp})),
});
