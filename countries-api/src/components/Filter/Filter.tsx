import {useState} from 'react';
import Dropdown from '../Dropdown';
import {ArrowFilterIcon} from '../Icons';
import {Box, Overlay} from '../UI';
import PortalToBody from '../Portal';
import {useCountries} from '../../provider/CountriesProvider';

const Filter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {regions, requestCountriesByFilter} = useCountries();

  const clickHandler = (e: React.MouseEvent) => {
    const region = (e.target as HTMLDivElement).textContent;

    requestCountriesByFilter(region!);
  };

  const onIterateRegions = (regions: string[]) => {
    return regions.map(r => (
      <Box
        className={`w-full hover:bg-neutral-100 active:bg-neutral-200 rounded-md px-3 py-1`}
        key={r}
        onClick={(e: React.MouseEvent) => clickHandler(e)}
      >
        {r}
      </Box>
    ));
  };

  return (
    <Box
      onClick={() => setIsOpen(!isOpen)}
      className="relative bg-white px-4 py-4 lg:py-2 rounded-md shadow-lg hover:shadow-xl transition cursor-pointer z-21"
    >
      <Box className="flex items-center justify-between gap-12 h-full">
        <p className="text-sm">Filter by Region</p>
        <ArrowFilterIcon
          classNameSVG={`transition ${isOpen ? 'rotate-0' : '-rotate-180'}`}
        />
      </Box>

      {isOpen && (
        <Dropdown classNameBox="absolute bg-white px-1 py-2 left-0 text-sm mt-3 rounded-md w-full shadow-lg z-21">
          {Array.isArray(regions) ? onIterateRegions(regions) : regions}
        </Dropdown>
      )}
      {isOpen && (
        <PortalToBody>
          <Overlay />
        </PortalToBody>
      )}
    </Box>
  );
};

export default Filter;
