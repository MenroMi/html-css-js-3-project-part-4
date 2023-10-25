// components
import Cards from '../Cards';
import Filter from '../Filter';
import SearchBar from '../SearchBar';
import {Box} from '../UI';
import ScrollUp from '../ScrollUp';

// constants
import {FIELD_COUNTRIES, SKELETON_CARDS_SIZE} from '../../constants';

// store
import useCountriesStore from '../../store';
import {MoreBtn} from '../Buttons';
import {SkeletonCard} from '../Skeletons';

const Main = () => {
  const {
    isError,
    isFetched,
    isLoading,
    isLastPage,
    isCanGoUp,
    getNextBunchCountries,
    requestCountriesByName,
    requestCountriesByFilter,
    visibleCountries,
    filteredCountries,
    searchedCountries,
    regions,
  } = useCountriesStore();

  const moreBtnClickHandler = () => {
    let field: FIELD_COUNTRIES = FIELD_COUNTRIES.DEFAULT;

    if (isError && isLoading) {
      return;
    }

    if (filteredCountries.length > 0 && searchedCountries.length === 0) {
      field = FIELD_COUNTRIES.FILTER;
    } else if (searchedCountries.length > 0 && filteredCountries.length === 0) {
      field = FIELD_COUNTRIES.SEARCH;
    }

    getNextBunchCountries(field);
  };

  return (
    <main className="flex flex-col pt-32 px-7 sm:px-16 pb-10 min-h-[100vh] dark:text-txt-dark">
      <Box className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between max-h-[10rem]">
        <SearchBar requestCountriesByName={requestCountriesByName} />
        <Filter
          regions={regions}
          requestCountriesByFilter={requestCountriesByFilter}
        />
      </Box>

      <Box
        className={`flex flex-col items-center gap-10 h-full flex-1 ${
          !isLoading && !isError && isFetched && visibleCountries.length === 0
            ? 'justify-center'
            : 'justify-between'
        }`}
      >
        <Box className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 grid-flow-row w-full ">
          {isLoading && !isFetched ? (
            (visibleCountries.length === 0
              ? SKELETON_CARDS_SIZE
              : visibleCountries
            ).map(id => <SkeletonCard />)
          ) : (
            <Cards
              visibleCountries={visibleCountries}
              isError={isError}
              isLoading={isLoading}
              isFetched={isFetched}
            />
          )}
        </Box>

        {!isLastPage && (
          <MoreBtn
            isError={isError}
            isFetched={isFetched}
            isLoading={isLoading}
            moreBtnClickHandler={moreBtnClickHandler}
          />
        )}
      </Box>

      <ScrollUp isCanGoUp={isCanGoUp} />
    </main>
  );
};

export default Main;
