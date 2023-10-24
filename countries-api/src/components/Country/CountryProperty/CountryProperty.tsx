// types
import type {FC} from 'react';
import type {Currency, ICountryKeys, Language} from '../../../types';

// interface
interface ICountryPropertyProps {
  id: string;
  position?: string;
  val: ICountryKeys;
  title: string;
  handleArrElems: (
    val: string[] | Currency[] | Language[],
  ) => (JSX.Element | undefined)[];
}

const CountryProperty: FC<ICountryPropertyProps> = ({
  id,
  position,
  val,
  title,
  handleArrElems,
}) => {
  return (
    <li
      key={id}
      className={`min-h-[3rem] max-h-[5rem] self-center ${
        position && `${position}`
      }`}
    >
      <span className="font-semibold">{title}: </span>
      {Array.isArray(val) ? handleArrElems(val) : !val ? 'none' : val}
    </li>
  );
};

export default CountryProperty;
