import { useContext, useState } from "react";
import { resetResult, setResults } from "../context/actions";
import { SearchContext } from "../context/search-context";
import { fetchByQuery, fetchNextPage, fetchByImdbID } from "./../api/search";
import useApi from "./useApi";

/**
 * This hook handle OMDB API call and the search context api
 * @param {Function} fetchFunc function to call retrieve the search result
 */
const useSearch = (fetchFunc) => {
  const [error, setError] = useState(null);
  const [state, dispatch] = useContext(SearchContext); // search api context | global state and dispatch function
  const searchApi = useApi(fetchFunc); // api call helper

  /**
   * Help function | Call OMDB API and handle the response
   * @param  {...any} args request parameters to send to the omdb api
   */
  const request = async (...args) => {
    let response; // to save the api response
    try {
      // call the api
      response = await searchApi.request(...args);
      // if error, call the error handler function to set local
      // state error and clean global state and return the error
      if (response.status !== 200) return _handleError(response.data);
      // if response but no result returned set empty result
      // to the global state and return nothing to cut the function execution
      if (response.status === 200 && response.data.Response === "False") {
        dispatch(resetResult(_getQuery(...args)));
        return;
      }
      // if response, call the response handler to format the data
      // and save the formatted data to the response variable
      response = _handleRequestResponseData(response.data, _getQuery(...args));
    } catch (error) {
      // error handler,
      console.log(error);
      response = _handleError(error.message);
    }

    // then return the response
    return response;
  };

  /**
   * Set the error to the local error state and
   * reset the global state
   * @param {string} error
   */
  const _handleError = (error) => {
    setError(error);
    dispatch(resetResult());
    console.log(error);
    return error;
  };

  /**
   * Format the request response and save the formatted
   * data to the global state
   * @param {object} data request response
   * @param {query} query query parameter
   */
  const _handleRequestResponseData = (data, query) => {
    if (fetchFunc.name === fetchByImdbID.name) return data;

    const formattedData = _formatRequestResponseData(data, query);
    dispatch(setResults(formattedData));
    return formattedData;
  };

  /**
   * Format the data to correspond to the reducer action
   * and pass the formatted data to the reducer
   * @param {object} data request response
   * @param {query} query query parameter
   */
  const _formatRequestResponseData = (data, query) => {
    switch (fetchFunc.name) {
      case fetchByQuery.name:
        return { ...data, query };
      case fetchNextPage.name:
        return {
          ...state,
          currentPage: state.currentPage++,
          Search: [...state.results, ...data.Search],
        };
      default:
        throw new Error("Unexpected fetch function.");
    }
  };

  // get query request parameter if any otherwise return thr query save in the state
  const _getQuery = (...args) =>
    fetchFunc.name === fetchByQuery.name ? args : state.query;

  // check if the results has next page
  const _hasNextPage = () => state.pages > state.currentPage;

  // check if request fail
  const _hasError = () => !!error;

  return {
    error,
    hasNextPage: _hasNextPage(),
    hasError: _hasError(),
    state,
    request,
  };
};

export default useSearch;
