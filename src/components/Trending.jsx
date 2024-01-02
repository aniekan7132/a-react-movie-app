import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Container } from "./Navbar";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import noImg from "../assets/no-image.png";
import "./Trending.css";
import TrailerTrending from "../Trailers/TrailerTrending";

function Trends() {
  const [trendArray, setTrendArray] = useState([]);
  const { toggle, inputValue } = useContext(Container);
  const [trailer, setTrailer] = useState(true);
  const [trendTitle, setTrendtTitle] = useState("");
  const api = "https://api.themoviedb.org/3";
  const trendShow = "/trending/all/week";
  const images = "https://image.tmdb.org/t/p/w500/";

  const Trends = async () => {
    const data = await axios.get(`${api}${trendShow}`, {
      params: {
        api_key: "11c5de302f8a3b15fb5761b834be19a5",
      },
    });

    const results = data.data.results;
    setTrendArray(results);
  };

  useEffect(() => {
    Trends();
  });

  const TrendTitle = (trend) => {
    setTrendtTitle(trend.title);
    setTrailer(!trailer);
  };

  return (
    <>
      <div className={toggle ? "main-bg-color" : "secondary-bg-color"}>
        <div className="movies-container">
          {trendArray.map((trend) => {
            return (
              <>
                <div id={trailer ? "container" : "no-container"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id="play-icon"
                    cursor={"pointer"}
                    onClick={() => TrendTitle(trend)}
                  />
                  <img
                    src={
                      trend.poster_path
                        ? `${images}${trend.poster_path}`
                        : noImg
                    }
                    alt=""
                    onClick={() => TrendTitle(trend)}
                  />
                  <h3
                    id="smaller-text"
                    className={toggle ? "main-color" : "secondary-color"}
                  >
                    {trend.title}
                  </h3>
                </div>
              </>
            );
          })}
          {trailer ? (
            console.log
          ) : (
            <TrailerTrending TrendTitle={trendTitle} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "nothing" : "exit3"}
            className={toggle ? "dark-theme" : "light-theme-color"}
            fontSize={55}
            color={toggle ? "#fff" : "#ff206e"}
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </>
  );
}

export default Trends;
