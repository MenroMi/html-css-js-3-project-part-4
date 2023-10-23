// basic
import React, {FC, createContext, useEffect} from 'react';

// store
import useCountriesStore from '../store';

// interface
interface CountriesProvider {
  children: React.ReactNode;
}

const CountriesContext = createContext({});

const CountriesProvider: FC<CountriesProvider> = ({children}) => {
  const {isCanGoUp, setIsCanGoUp, requestCountries} = useCountriesStore();

  useEffect(() => {
    requestCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('rerender scroll');
    const scrollHandler = () => {
      if (document.documentElement.scrollTop > 600) {
        setIsCanGoUp(true);
      }

      if (isCanGoUp && document.documentElement.scrollTop <= 600) {
        setIsCanGoUp(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [isCanGoUp, setIsCanGoUp]);

  return (
    <CountriesContext.Provider value={{}}>{children}</CountriesContext.Provider>
  );
};

export default CountriesProvider;
