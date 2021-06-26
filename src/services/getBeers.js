import axios from 'axios';

const getBeers = () => {
  const getFirstBeers = async () => {
    try {
      const result = await axios.get(`${process.env.VUE_APP_API_URL}/beers`);
      return result.data.slice(0, 10);
    } catch (e) {
      throw new Error({ error: true, message: e });
    }
  };

  return {
    getFirstBeers,
  };
};

export default getBeers;
