import { useContext } from "react";
import {
  deleteNomination,
  sendNotification,
  setNominations,
} from "../context/actions";
import { SearchContext } from "../context/search-context";

/** Nomination hook */
const useNomination = () => {
  const [state, dispatch] = useContext(SearchContext);

  const nominate = (movie, notify = false) => {
    // check if nominations state is less than five
    if (state.nominations.length === 5)
      return dispatch(
        sendNotification("You can only nominate 5 movies 🚨.", "warning", 5000)
      );
    /**
     * Track nomination length,  If 5 movies are nominated send notification
     * */
    if (state.nominations.length === 4)
      dispatch(
        sendNotification(
          "Congratulations 🏆🎊 🎉. You reach five nominations.",
          "success",
          3000
        )
      );
    // if not call the dispatcher and add movie to the nomination array
    dispatch(setNominations(movie));
    // if
    if (notify)
      dispatch(
        sendNotification(
          `The movie "${movie.Title}" has been successfully added to your nominations.`,
          "success",
          3000
        )
      );
  };
  /**
   * Check if the movie is already nominated to disable the nominate
   * button in the movie card
   */
  const isNominate = (imdbID) =>
    !!state.nominations.filter((movie) => movie.imdbID === imdbID).length;
  /**
   * Remove movie in nomination array
   */
  const remove = (imdbID) => dispatch(deleteNomination(imdbID));
  // return nominations state and handlers function
  return {
    nominations: state.nominations,
    nominate,
    isNominate,
    remove,
    count: state.nominations.length,
  };
};

export default useNomination;
