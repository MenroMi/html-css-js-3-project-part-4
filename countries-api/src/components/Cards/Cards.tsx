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
      {!isLoading && !isError && isFetched && visibleCountries.length === 0 && (
        <Box className="bg-white dark:bg-elems-dark shadow h-40 w-full max-w-2xl flex justify-center items-center  text-2xl uppercase font-semibold text-slate-500 rounded-md">
          this country is not in the database
        </Box>
      )}
    </>
  );
};
export default Cards;
