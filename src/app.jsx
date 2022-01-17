import "./app.css";
import { useEffect, useState } from "react";
import Search from "./components/search";
import VideoContainer from "./components/videoContainer";
import React from "react";

function App() {
  const [videos, setVideo] = useState([]);
  const [isHidden, setHidden] = useState(false);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDD8izz7zlkkCSF97v-Qw0mEJQHuIADzxI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const handleSubmit = (value) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyDD8izz7zlkkCSF97v-Qw0mEJQHuIADzxI`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  };

  const handleLogoClick = () => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDD8izz7zlkkCSF97v-Qw0mEJQHuIADzxI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  };

  const handleVideoClick = () => {
    setHidden(true);
  };

  return (
    <>
      <Search onSubmit={handleSubmit} onClick={handleLogoClick} />
      <VideoContainer
        video={videos}
        isHidden={isHidden}
        onClick={handleVideoClick}
      />
    </>
  );
}

export default App;
