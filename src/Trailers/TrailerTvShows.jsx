import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
 // import "./TrailerMovies.css";
import "./TrailerTvShows.css";


const TrailerTvShows = ({ tvShowTitle, toggle }) => {
  //Setting up the initial states using
  // react hook 'useState"
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  //A function to fetch the required URL
  // and storing it inside the
  // videoURL state variable
  function handleSearch() {
    setVideo(tvShowTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  useEffect(() => {
    handleSearch();
  }, [videoURL]);

  return (
    <>
      <div className="container"></div>
      <div className="player">
        <h1 id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"}>
          {tvShowTitle}
        </h1>
        <ReactPlayer url={videoURL} controls={true} />
      </div>
    </>
  );
};

export default TrailerTvShows;
