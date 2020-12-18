export const SET_RESULTS = "SET_RESULTS";
export const RESET_RESULTS = "RESET_RESULTS";
export const SET_NOMINATIONS = "SET_NOMINATIONS";
export const DELETE_NOMINATION = "DELETE_NOMINATION";

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
