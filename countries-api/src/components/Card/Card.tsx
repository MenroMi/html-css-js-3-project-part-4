// components
import {Box} from '../UI';

// types
import type {ICountry} from '../../types';
import {Link} from 'react-router-dom';

// interface
interface ICardProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    Pick<ICountry, 'capital' | 'name' | 'flag' | 'region'> {
  population: string;
}

const Card = ({
  capital,
  name,
  flag,
  population,
  region,
  ...props
}: ICardProps) => {
  return (
    <Link
      to={`/${name.toLowerCase()}`}
      {...props}
      className="flex flex-col bg-white dark:bg-elems-dark shadow-md rounded-md overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition cursor-pointer group"
    >
      <Box className="h-[15rem] overflow-hidden">
        <img src={flag} alt={name} className="h-full w-full object-cover" />
      </Box>
      <Box className="py-8 px-5 mt-auto">
        <h3 className="font-bold text-lg">{name}</h3>

        <ul className="mt-2">
          <li>
            <span className="font-bold">Population</span>:{' '}
            <span className="font-light">{population}</span>
          </li>
          <li>
            <span className="font-bold">Region</span>:{' '}
            <span className="font-light">{region}</span>
          </li>
          <li>
            <span className="font-bold">Capital</span>:{' '}
            <span className="font-light">{capital}</span>
          </li>
        </ul>
      </Box>
    </Link>
  );
};

export default Card;
