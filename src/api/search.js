import client from "./client";
/** OMDB API call helper */
export default (q) => client.get(q);
