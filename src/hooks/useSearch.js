import { useContext, useState } from "react";
import { resetResult, setResults } from "../context/actions";
import { SearchContext } from "../context/search-context";
import { fetchByQuery, fetchNextPage, fetchByImdbID } from "./../api/search";
import useApi from "./useApi";

const useSearch = (fetchFunc) => {
  const [error, setError] = useState(null);
  const [state, dispatch] = useContext(SearchContext);
  const searchApi = useApi(fetchFunc);

  const request = async (...args) => {
    let response;
    try {
      response = await searchApi.request(...args);
      if (response.status !== 200) return _handleError(response.data);
      if (response.status === 200 && response.data.Response === "False") {
        dispatch(resetResult(_getQuery(...args)));
        return;
      }

      response = _handleRequestResponseData(response.data, _getQuery(...args));
    } catch (error) {
      console.log(error);
      response = _handleError(error.message);
    }

    return response;
  };

  const _handleError = (error) => {
    setError(error);
    dispatch(resetResult());
    console.log(error);
    return error;
  };

  const _handleRequestResponseData = (data, query) => {
    if (fetchFunc.name === fetchByImdbID.name) return data;

    const formattedData = _formatRequestResponseData(data, query);
    dispatch(setResults(formattedData));
    return formattedData;
  };

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

  const _getQuery = (...args) =>
    fetchFunc.name === fetchByQuery.name ? args : state.query;

  const _hasNextPage = () => state.pages > state.currentPage;

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
