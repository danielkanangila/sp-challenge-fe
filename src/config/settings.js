const NODE_ENV = process.env.NODE_ENV;

const settings = {
  development: {
    apiURL: "http://www.omdbapi.com",
  },
  production: {
    apiURL: "http://www.omdbapi.com",
  },
};

export default settings[NODE_ENV];
