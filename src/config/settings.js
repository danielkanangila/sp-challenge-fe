const NODE_ENV = process.env.NODE_ENV;
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const settings = {
  development: {
    apiURL: "https://www.omdbapi.com",
    apiKey: `?apikey=${API_KEY}`,
    API_KEY,
  },
  production: {
    apiURL: "https://www.omdbapi.com",
    apiKey: `?apikey=${API_KEY}`,
    API_KEY,
  },
};

export default settings[NODE_ENV];
