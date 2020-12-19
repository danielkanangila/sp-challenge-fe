import React, { createContext, useReducer } from "react";
import {
  SET_RESULTS,
  RESET_RESULTS,
  SET_NOMINATIONS,
  DELETE_NOMINATION,
  SEND_NOTIFICATION,
  CLOSE_NOTIFICATION,
} from "./actions";

export const SearchContext = createContext();

const initialState = {
  results: [],
  totalResults: 0,
  query: "",
  nominations: [],
  notifications: [],
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
      // Check if movie is already nominated
      const nominatedMovies = state.nominations.filter(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      // if movie is already nominated do nothing
      if (nominatedMovies.length) return state;
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
    case SEND_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload.id
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
