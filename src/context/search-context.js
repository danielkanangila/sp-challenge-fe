import React, { createContext, useReducer } from "react";
import {
  SET_RESULTS,
  RESET_RESULTS,
  SET_NOMINATIONS,
  DELETE_NOMINATION,
} from "./actions";

export const SearchContext = createContext();

const initialState = {
  results: [],
  totalResults: 0,
  query: "",
  nominations: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_RESULTS:
      return {
        ...initialState,
        ...action.payload,
        nominations: state.nominations,
      };
    case SET_NOMINATIONS:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
      };
    case DELETE_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
      };
    default:
      throw new Error("An unknown error occurred on context");
  }
};

export const SearchContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={[state, dispatch]}>
      {props.children}
    </SearchContext.Provider>
  );
};
