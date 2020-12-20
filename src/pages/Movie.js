import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByImdbID } from "../api/search";
import RenderMovie from "../components/movie/RenderMovie";
import useNomination from "../hooks/useNominations";
import useSearch from "../hooks/useSearch";

const Movie = () => {
  const [movie, setMovie] = useState(null); // local state
  const { request } = useSearch(fetchByImdbID); // omdb api and context api handlers
  const { nominate, isNominate } = useNomination(); // nominations handler
  const params = useParams(); // route params

  /**
   * Nomination button handler
   */
  const onNominate = () =>
    nominate(
      {
        ...movie,
        Year: movie.Released !== "N/A" ? movie.Released.split(" ")[2] : "N/A",
      },
      true
    );

  // track route params change and when component will mount
  useEffect(() => {
    /** Call the api to get the movie corresponding
     *  to the movie imdbID and set the response to the state
     * */
    const fetchMovie = async (imdbID) => setMovie(await request(imdbID));
    // retrieve imdbID from params all call the fetchMovie function
    if (params.imdbID) fetchMovie(params.imdbID);
    return () => {};
  }, [params, request]);

  return (
    <RenderMovie
      movie={movie}
      onNominate={onNominate}
      isNominate={isNominate}
    />
  );
};

export default Movie;
