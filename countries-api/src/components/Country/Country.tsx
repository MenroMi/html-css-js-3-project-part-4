import React, {useEffect, useState} from 'react';
import {Box, Button} from '../UI';
import {useNavigate, useParams} from 'react-router-dom';
import {ArrowLeftIcon} from '../Icons';
import {ICountry} from '../../types';
import useCountriesStore from '../../store';
import CountryDetail from './CountryDetail';
import {SkeletonDetail} from '../Skeletons';

const Country = () => {
  const navigate = useNavigate();
  const {countryName} = useParams();
  const {countries, isFetched, isLoading} = useCountriesStore();
  const [country, setCountry] = useState<ICountry | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[] | null>(null);

  useEffect(() => {
    const [actualCountry] = countries.filter(
      c => c.name.toLowerCase() === countryName,
    );

    let borders: string[] | null;

    if (!actualCountry) {
    }

    if (actualCountry && !actualCountry.borders) {
      borders = null;
    } else {
      borders = countries
        .filter(
          c =>
            actualCountry.borders &&
            actualCountry.borders.indexOf(c.alpha3Code) >= 0,
        )
        .map(c => c.name.toLowerCase());
    }

    setCountry(actualCountry);
    setBorderCountries(borders);
  }, [countryName, isFetched]);

  return (
    <Box className="pt-32 sm:px-16 pb-10 max-h-screen overflow-auto px-7">
      <Button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center gap-2 border px-7 py-2 text-sm rounded-sm hover:bg-slate-200 border-slate-200 dark:bg-elems-dark dark:border-elems-dark dark:hover:bg-slate-600 dark:active:bg-slate-700 dark:hover:border-slate-600 dark:active:border-slate-700 max-w-[8rem] group"
      >
        <ArrowLeftIcon className="dark:fill-txt-dark group-hover:-translate-x-1 transition" />
        Back
      </Button>

      {!country ? (
        <SkeletonDetail />
      ) : (
        <CountryDetail country={country} borderCountries={borderCountries} />
      )}
    </Box>
  );
};

export default Country;
