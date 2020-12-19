import client from "./client";
import settings from "./../config/settings";

const { apiKey } = settings;
/** OMDB API call helper */
export const search = (query) => client.get(`${apiKey}&s=${query}`);
export const searchNextPage = (query, page) =>
  client.get(`${apiKey}&s=${query}&page=${page}`);
