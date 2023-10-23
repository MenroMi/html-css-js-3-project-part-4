// components
import {Box} from '../UI';

// types
import type {ICountry} from '../../types';

interface ICardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<ICountry, 'population'> {
  population: string;
}

const Card = ({
  capital,
  name,
  flag,
  population,
  region,
  topLevelDomain,
  ...props
}: ICardProps) => {
  return (
    <Box
      {...props}
      className="flex flex-col bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition cursor-pointer group"
      tabIndex={1}
    >
      <img src={flag} alt={name} className="h-full w-full" />

      <Box className="py-8 px-5 mt-auto">
        <h3 className="font-bold text-lg">{name}</h3>

        <ul className="mt-2">
          <li>
            <span className="font-bold">Population</span>: {population}
          </li>
          <li>
            <span className="font-bold">Region</span>: {region}
          </li>
          <li>
            <span className="font-bold">Capital</span>: {capital}
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Card;
