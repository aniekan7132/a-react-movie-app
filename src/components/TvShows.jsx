import React, { useEffect, useState, useContext, Fragment } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./Navbar";
import "./TvShows.css";
import noImg from "../assets/no-image.png";
import axios from "axios";
import TrailerTvShows from "../Trailers/TrailerTvShows";

const TvShows = () => {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [showData, setShowData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [title, setTile] = useState("");
  const shown = input ? "search" : "discover";
  const api = `https://api.themoviedb.org/3/${shown}/tv`;
  const images = "https://image.tmdb.org/t/p/w500/";

  const TvShows = async () => {
    const data = await axios.get(api, {
      params: {
        api_key: "11c5de302f8a3b15fb5761b834be19a5",
        query: input,
      },
    });

    const results = data.data.results;
    setShowData(results);
  };

  useEffect(() => {
    TvShows();
  }, [input]);
  console.log(showData);

  const TvShowTitle = (show) => {
    setTile(show.name);
    setTrailer(!trailer);
  };

  return (
    <>
      <div className={toggle ? "main-bg-color" : "secondary-bg-color"}>
        <div className="movies-container">
          {showData.map((show) => {
            return (
              <Fragment key={show.id}>
                <div id={trailer ? "container" : "no-container"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    cursor={"pointer"}
                    id={trailer ? "play-icon" : "hide"}
                    onClick={() => TvShowTitle(show)}
                  />
                  <img
                    src={
                      show.poster_path ? `${images}${show.poster_path}` : noImg
                    }
                    alt=""
                    onClick={() => TvShowTitle(show)}
                  />
                  <h3
                    id={show.name.length > 28 ? "smaller" : ""}
                    className={toggle ? "main-color" : "secondary-color"}
                  >
                    {show.name}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? (
            console.log
          ) : (
            <TrailerTvShows
              tvShowTitle={title}
              toggle={toggle}
              id={toggle ? "trailerMovie-name-dark" : "trailerMovie-name-light"}
            />
          )}
          <AiOutlineClose
            id={trailer ? "nothing" : "exit2"}
            fontSize={55}
            color={toggle ? "#fff" : "#ff206e"}
            cursor={"pointer"}
            className={toggle ? "lightThemeColor" : "darkTheme"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </>
  );
};

export default TvShows;
