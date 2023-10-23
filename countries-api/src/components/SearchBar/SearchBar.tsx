import {Box, Input} from '../UI';
import {SearchIcon} from '../Icons';

const SearchBar = () => {
  return (
    <Box className="flex gap-5 items-center bg-white pl-10 pr-3 py-4 lg:max-w-[27rem] w-full rounded-md shadow-lg">
      <SearchIcon />
      <Input
        className="h-full w-full placeholder:font-light placeholder:text-sm"
        placeholder="Search for a country..."
      />
    </Box>
  );
};

export default SearchBar;
