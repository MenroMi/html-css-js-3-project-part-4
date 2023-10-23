import {useCountries} from '../../provider/CountriesProvider';
import useCountriesStore from '../../store';
import Cards from '../Cards';
import Filter from '../Filter';
import SearchBar from '../SearchBar';
import {Box, Button} from '../UI';
import {LoaderIcon} from '../Icons';

const Main = () => {
  const {getNextBunchCountries, visibleCountries} = useCountries();
  const {isError, isFetched, isLoading} = useCountriesStore();

  const clickHandler = () => {
    if (!isError && !isLoading) getNextBunchCountries();
  };

  return (
    <main className="flex flex-col pt-32 px-7 sm:px-16 pb-10 min-h-[100vh]">
      <Box className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between max-h-[10rem]">
        <SearchBar />
        <Filter />
      </Box>

      <Box className="flex flex-col justify-between gap-10 h-full flex-1">
        <Cards
          visibleCountries={visibleCountries}
          isError={isError}
          isLoading={isLoading}
        />

        <Button
          disabled={!isFetched}
          onClick={clickHandler}
          className="flex gap-2 justify-center items-center text-xl bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 transition py-3 px-4 rounded-md w-full max-w-[15rem] text-slate-400 justify-self-center border-2 disabled:opacity-50 self-center"
        >
          MORE
          {!isError && !isFetched && isLoading && <LoaderIcon />}
        </Button>
      </Box>
    </main>
  );
};

export default Main;
// col-start-2 col-end-4 mx-auto mt-auto row-span-2
