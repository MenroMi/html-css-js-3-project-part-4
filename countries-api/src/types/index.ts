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
  population: number;
  region: string;
  capital: string;
  currencies: Currency[];
  languages: Language[];
  subregion: string;
  topLevelDomain: string[];
  borders: string[];
}
