import client from "./client";
import settings from "./../config/settings";

const { apiKey } = settings;
/** OMDB API call helper */
export const fetchByQuery = (query) => client.get(`${apiKey}&s=${query}`);

export const fetchNextPage = (query, page) =>
  client.get(`${apiKey}&s=${query}&page=${page}`);

export const fetchByImdbID = (imdbID) => client.get(`${apiKey}&i=${imdbID}`);
