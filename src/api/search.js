import client from "./client";
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
/** OMDB API call helper */
export const search = (query) => client.get(`?apikey=${API_KEY}&s=${query}`);
