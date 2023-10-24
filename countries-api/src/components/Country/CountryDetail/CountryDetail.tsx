// basic
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

// components
import {Box, Button} from '../../UI';
import {ArrowLeftIcon} from '../../Icons';
import CountryProperties from '../CountryProperties';
import CountryBorders from '../CountryBorders';

// store
import useCountriesStore from '../../../store';

// type
import type {ICountry} from '../../../types';

const CountryDetail = () => {
  const navigate = useNavigate();
  const {countryName} = useParams();
  const {countries, isFetched} = useCountriesStore();
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
        className="flex items-center justify-center gap-2 border px-7 py-2 text-sm rounded-sm hover:bg-slate-200 border-slate-200 max-w-[8rem]"
      >
        <ArrowLeftIcon />
        Back
      </Button>

      <Box className="flex flex-col lg:flex-row justify-between max-h-[40rem] mt-20 gap-12 lg:gap-28 items-start 2xl:items-center w-full">
        <Box className="w-full max-h-[30rem] lg:h-[30rem] lg:max-w-[50%] self-center">
          <img
            src={country?.flag}
            alt={country?.name}
            className="h-full object-contain"
          />
        </Box>

        <Box className="lg:max-w-[50%] w-full h-full">
          <h2 className="text-4xl lg:text-3xl  font-bold">{country?.name}</h2>

          <CountryProperties country={country} />

          {borderCountries && borderCountries.length > 0 && (
            <Box className="flex flex-wrap gap-2 items-center mt-14 min-h-[3rem] pb-10 sm:pb-0">
              <span className="font-semibold">Border Countries:</span>
              {borderCountries && <CountryBorders borders={borderCountries} />}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CountryDetail;
