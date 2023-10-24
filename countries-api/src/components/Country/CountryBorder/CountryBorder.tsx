// basic
import {Link} from 'react-router-dom';

// interface
interface ICountryBordersProps {
  border: string;
}

const CountryBorder = ({border}: ICountryBordersProps) => {
  return (
    <Link
      className="capitalize border py-1 px-3 text-sm hover:bg-slate-200 rounded-sm"
      key={border}
      to={`/${border}`}
    >
      {border}
    </Link>
  );
};

export default CountryBorder;
