import React, { createContext, useReducer } from "react";

export const SearchContext = createContext();

const initialState = {
  results: [],
  totalResults: 0,
  query: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return {
        ...state,
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
