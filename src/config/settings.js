const NODE_ENV = process.env.NODE_ENV;
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const settings = {
  development: {
    apiURL: `http://www.omdbapi.com/?apikey=${API_KEY}`,
  },
  production: {
    apiURL: `http://www.omdbapi.com/?apikey=${API_KEY}`,
  },
};

export default settings[NODE_ENV];
