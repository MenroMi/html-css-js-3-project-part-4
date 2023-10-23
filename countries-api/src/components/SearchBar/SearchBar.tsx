// basic
import {memo} from 'react';

// components
import {Box, Button, Input} from '../UI';
import {SearchIcon} from '../Icons';

// hooks
import {useDebounce} from '../../hooks';

// interface
interface ISearchBarProps {
  requestCountriesByName: (name: string) => Promise<void>;
}

const SearchBar = memo(({requestCountriesByName}: ISearchBarProps) => {
  const {changeHandler, searchInput, onResetInput} = useDebounce(
    () => debounceHandler(searchInput),
    500,
  );

  const debounceHandler = (name: string) => {
    requestCountriesByName(name);
  };

  const resetClickHandler = () => {
    requestCountriesByName('');
    onResetInput();
  };

  return (
    <Box className="flex gap-5 h-14 items-center bg-white pl-7 pr-3 py-1 lg:max-w-[27rem] w-full rounded-md shadow-lg transition">
      <Box className="h-5 w-5">
        <SearchIcon />
      </Box>
      <Input
        className="h-full w-full placeholder:font-light placeholder:text-sm outline-none"
        placeholder="Search for a country..."
        onChange={changeHandler}
        value={searchInput}
      />
      {searchInput && (
        <Button
          className="hover:bg-neutral-100 active:bg-neutral-200 h-full w-full max-w-[4rem] transition rounded"
          onClick={resetClickHandler}
        >
          Clear
        </Button>
      )}
    </Box>
  );
});

export default SearchBar;
