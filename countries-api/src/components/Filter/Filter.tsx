// basic
import {useState} from 'react';

// components
import Dropdown from '../Dropdown';
import {ArrowFilterIcon} from '../Icons';
import {Box, Overlay} from '../UI';
import PortalToRoot from '../Portal';

// interface
interface IFilterProps {
  regions: string | string[];
  requestCountriesByFilter: (region: string) => Promise<void>;
}

const Filter = ({regions, requestCountriesByFilter}: IFilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [actualRegion, setActualRegion] = useState<string>('');

  const clickHandler = (e: React.MouseEvent) => {
    const region = (e.target as HTMLDivElement).textContent;
    setActualRegion(region!);
    requestCountriesByFilter(region!);
  };

  const onIterateRegions = (regions: string[]) => {
    return regions.map(r => (
      <Box
        className={`w-full hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-800 dark:active:bg-neutral-900 rounded-md px-3 py-1`}
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
      className="relative bg-white dark:bg-elems-dark h-14 px-4 py-1 lg:py-2 rounded-md shadow-lg hover:shadow-xl transition cursor-pointer z-21 min-w-[12rem]"
    >
      <Box className="flex items-center justify-between gap-12 h-full">
        <p className="text-sm">
          {actualRegion ? actualRegion : 'Filter by Region'}
        </p>
        <ArrowFilterIcon
          classNameSVG={`dark:fill-txt-dark transition ${
            isOpen ? 'rotate-0' : '-rotate-180'
          }`}
        />
      </Box>

      {isOpen && (
        <Dropdown classNameBox="absolute bg-white dark:bg-elems-dark px-1 py-2 left-0 text-sm mt-3 rounded-md w-full shadow-lg z-21">
          {Array.isArray(regions) ? onIterateRegions(regions) : regions}
        </Dropdown>
      )}
      {isOpen && (
        <PortalToRoot>
          <Overlay />
        </PortalToRoot>
      )}
    </Box>
  );
};

export default Filter;
