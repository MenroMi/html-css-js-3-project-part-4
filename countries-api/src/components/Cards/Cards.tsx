import {Box} from '../UI';
import Card from '../Card';
import {onFormatNumbers} from '../../helpers';
import type {ICountry} from '../../types';

interface ICardsProps {
  isLoading: boolean;
  isError: boolean;
  visibleCountries: ICountry[];
}

const Cards = ({isError, isLoading, visibleCountries}: ICardsProps) => {
  return (
    <Box className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 grid-flow-row w-full ">
      {!isLoading && isError && <p>Error...</p>}
      {!isError &&
        visibleCountries.length > 0 &&
        visibleCountries.map(
          ({
            borders,
            capital,
            name,
            currencies,
            flag,
            languages,
            population,
            region,
            subregion,
            topLevelDomain,
          }) => (
            <Card
              key={name}
              borders={borders}
              capital={capital}
              name={name}
              currencies={currencies}
              flag={flag}
              languages={languages}
              population={onFormatNumbers(population)}
              region={region}
              subregion={subregion}
              topLevelDomain={topLevelDomain}
            />
          ),
        )}
    </Box>
  );
};
export default Cards;
