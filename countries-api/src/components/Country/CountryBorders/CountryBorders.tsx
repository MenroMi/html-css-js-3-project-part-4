// components
import CountryBorder from '../CountryBorder';

// interface
interface ICountryBordersProps {
  borders: string[];
}

const CountryBorders = ({borders}: ICountryBordersProps) => {
  return borders && borders.map(b => <CountryBorder key={b} border={b} />);
};

export default CountryBorders;
