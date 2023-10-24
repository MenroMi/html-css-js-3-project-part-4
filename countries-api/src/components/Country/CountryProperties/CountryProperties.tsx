// components
import CountryProperty from '../CountryProperty';

// helpers
import {onFormatNumbers} from '../../../helpers';

// constants
import {countryProps} from '../../../constants';

// types
import type {
  Currency,
  ICountry,
  ICountryKeys,
  ICountryProps,
  Language,
} from '../../../types';

// interface
interface ICountryPropertiesProps {
  country: ICountry | null;
}

const CountryProperties = ({country}: ICountryPropertiesProps) => {
  const onIterateProps = (countryProps: ICountryProps<keyof ICountry>[]) => {
    const handleArrElems = (val: string[] | Currency[] | Language[]) => {
      return val.map((v, i) => {
        if (typeof v !== 'string' && 'name' in v) {
          return (
            <span key={v.name ?? v}>
              {!v ? (
                'none'
              ) : (
                <>
                  {v.name}
                  {val && Array.isArray(val) && val.length === i + 1
                    ? ''
                    : ', '}
                </>
              )}
            </span>
          );
        }

        return <span key={v}>{v}</span>;
      });
    };

    return countryProps.map(({id, position, prop, title}) => {
      let val: ICountryKeys;
      if (!country || !(prop in country)) return;

      val = country[prop];

      if (typeof val === 'number') val = onFormatNumbers(val);

      return (
        <CountryProperty
          key={id}
          handleArrElems={handleArrElems}
          id={id}
          title={title}
          val={val}
          position={position}
        />
      );
    });
  };

  return (
    <ul className="mt-7 grid sm:grid-cols-2 grid-rows-5">
      {onIterateProps(countryProps)}
    </ul>
  );
};

export default CountryProperties;
