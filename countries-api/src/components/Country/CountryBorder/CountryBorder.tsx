// basic
import {Link} from 'react-router-dom';

// interface
interface ICountryBordersProps {
  border: string;
}

const CountryBorder = ({border}: ICountryBordersProps) => {
  return (
    <Link
      className="capitalize border py-1 px-3 text-sm hover:bg-slate-200 dark:bg-elems-dark dark:border-elems-dark dark:hover:bg-slate-600 dark:active:bg-slate-700 rounded-sm"
      key={border}
      to={`/${border}`}
    >
      {border}
    </Link>
  );
};

export default CountryBorder;
