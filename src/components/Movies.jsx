import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { Container } from "./Navbar";
import noImg from "../assets/no-image.png";
import "./Movies.css";
import TrailerMovies from "../Trailers/TrailerMovies";

const Movies = () => {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [moviesData, setMoviesData] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [trailer, setTrailer] = useState(true);
  const images = "https://image.tmdb.org/t/p/w500/";
  const shown = input ? "search" : "discover";

  const api = `https://api.themoviedb.org/3/${shown}/movie`;

  const movieCall = async () => {
    const data = await axios.get(api, {
      params: {
        api_key: "11c5de302f8a3b15fb5761b834be19a5",
        query: input,
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    // setTimeout(() => {movieCall()}, 100);
    movieCall();
  }, [input]);
  console.log(moviesData);

  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };

  return (
    <>
      <div className={toggle ? "main-bg-color" : "secondary-bg-color"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <Fragment key={movie.id}>
                <div id={trailer ? "container" : "no-container"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "play-icon" : "hide"}
                    onClick={() => MoviesTitle(movie)}
                    cursor={"pointer"}
                  />
                  <img
                    src={
                      movie.poster_path
                        ? `${images}${movie.poster_path}`
                        : noImg
                    }
                    alt="poster"
                    onClick={() => MoviesTitle(movie)}
                  />
                  <h3
                    id={movie.title.length > 28 ? "smaller-text" : ""}
                    className="movie-light"
                  >
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? (
            console.log
          ) : (
            <TrailerMovies moviesTitle={movieTitle} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "nothing" : "exit1"}
            fontSize={55}
            color={toggle ? "#fff" : "#ff206e"}
            className={toggle ? "dark-theme" : "light-theme-close"}
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
