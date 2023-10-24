export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  name: string;
  nativeName: string;
}

export interface ICountry {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  capital: string;
  currencies: Currency[];
  languages: Language[];
  subregion: string;
  topLevelDomain: string[];
  borders?: string[];
  alpha3Code: string;
}

export interface ICountryProps<T extends keyof ICountry> {
  id: string;
  title: string;
  position?: string;
  prop: T;
}

export type ICountryKeys = ICountry[keyof ICountry];
