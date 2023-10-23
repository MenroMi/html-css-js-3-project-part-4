// libs
import axios from 'axios';

const getCountries = async () => {
  try {
    const countries = await axios.get('/data.json');

    console.log(countries);

    if (countries.status !== 200) {
      throw new Error('Unexpected Error.');
    }

    return countries.data;
  } catch (error) {
    const err = error as Error;
    console.log(`${err.name} - ${err.message}`);
    return err;
  }
};

export default getCountries;
