// components
import {Box} from '../../UI';
import CountryProperties from '../CountryProperties';
import CountryBorders from '../CountryBorders';

// type
import type {ICountry} from '../../../types';

interface ICountryDetailProps {
  country: ICountry;
  borderCountries: string[] | null;
}

const CountryDetail = ({country, borderCountries}: ICountryDetailProps) => {
  return (
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
  );
};

export default CountryDetail;
