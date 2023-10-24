// components
import {Box} from '../UI';
import Card from '../Card';

// helpers
import {onFormatNumbers} from '../../helpers';

// type
import type {ICountry} from '../../types';

// interface
interface ICardsProps {
  isLoading: boolean;
  isError: boolean;
  isFetched: boolean;
  visibleCountries: ICountry[];
}

const Cards = ({
  isError,
  isLoading,
  isFetched,
  visibleCountries,
}: ICardsProps) => {
  return (
    <>
      <Box className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 grid-flow-row w-full ">
        {!isLoading && isError && <p>Error...</p>}
        {!isError &&
          visibleCountries.length > 0 &&
          visibleCountries.map(({capital, name, flag, region, population}) => (
            <Card
              key={name}
              capital={capital}
              name={name}
              flag={flag}
              region={region}
              population={onFormatNumbers(population)}
            />
          ))}
      </Box>
      {!isLoading && !isError && isFetched && visibleCountries.length === 0 && (
        <Box className="bg-white shadow h-40 w-full max-w-2xl flex justify-center items-center  text-2xl uppercase font-semibold text-slate-500 rounded-md">
          this country is not in the database
        </Box>
      )}
    </>
  );
};
export default Cards;
