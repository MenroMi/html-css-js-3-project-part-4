import {ICountry} from '../types';

const onTakeUniqueRegions = (countries: ICountry[]) => {
  return [...new Set(countries.map(c => c.region))].sort((a, b) =>
    a.localeCompare(b),
  );
};

export default onTakeUniqueRegions;
