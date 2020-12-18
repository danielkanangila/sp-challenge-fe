import React, { createContext, useReducer } from "react";
import { SET_RESULTS, RESET_RESULTS } from "./actions";

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
