import { makeid } from "../../utils";

export const SET_RESULTS = "SET_RESULTS";
export const RESET_RESULTS = "RESET_RESULTS";
export const SET_NOMINATIONS = "SET_NOMINATIONS";
export const DELETE_NOMINATION = "DELETE_NOMINATION";
export const SEND_NOTIFICATION = "SEND_NOTIFICATION";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";

export const setResults = (results) => {
  return {
    type: SET_RESULTS,
    payload: {
      results: results.Search,
      totalResults: results.totalResults,
      query: results.query,
    },
  };
};

export const resetResult = (query) => {
  return {
    type: RESET_RESULTS,
    payload: {
      query,
    },
  };
};

export const setNominations = (movie) => {
  return {
    type: SET_NOMINATIONS,
    payload: movie,
  };
};

export const deleteNomination = (imdbID) => {
  return {
    type: DELETE_NOMINATION,
    payload: { imdbID },
  };
};

export const sendNotification = (message, type, delay) => {
  return {
    type: SEND_NOTIFICATION,
    payload: { id: makeid(5), message, type, delay },
  };
};

export const closeNotification = (id) => {
  return {
    type: CLOSE_NOTIFICATION,
    payload: { id },
  };
};
