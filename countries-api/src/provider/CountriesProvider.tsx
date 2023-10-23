import React, {FC, createContext, useContext, useEffect} from 'react';
import {ICountry} from '../types';
import useCountriesStore from '../store';

interface CountriesContext {
  visibleCountries: ICountry[];
  regions: string[] | string;
  getNextBunchCountries: () => void;
  requestCountriesByFilter: (region: string) => void;
}

interface CountriesProvider {
  children: React.ReactNode;
}

const CountriesContext = createContext<CountriesContext>({
  visibleCountries: [],
  regions: [],
  getNextBunchCountries: () => {},
  requestCountriesByFilter: () => {},
});

const CountriesProvider: FC<CountriesProvider> = ({children}) => {
  const {
    visibleCountries,
    regions,
    request,
    requestCountriesByFilter,
    getNextBunchCountries,
  } = useCountriesStore();

  useEffect(
    () => {
      request();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <CountriesContext.Provider
      value={{
        visibleCountries,
        regions,
        getNextBunchCountries,
        requestCountriesByFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;

export const useCountries = () => useContext(CountriesContext);
