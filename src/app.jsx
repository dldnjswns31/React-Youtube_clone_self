import "./app.css";
import { useEffect, useState } from "react";
import Search from "./components/search";
import VideoContainer from "./components/videoContainer";
import React from "react";

function App() {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
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
    setSelectedVideo(null);
  };

  const handleLogoClick = () => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDD8izz7zlkkCSF97v-Qw0mEJQHuIADzxI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
    setSelectedVideo(null);
  };

  const handleVideoClick = (item) => {
    setSelectedVideo(item);
    console.log(item);
  };

  return (
    <>
      <Search onSubmit={handleSubmit} onClick={handleLogoClick} />
      <VideoContainer
        video={videos}
        selectedVideo={selectedVideo}
        onClick={handleVideoClick}
      />
    </>
  );
}

export default App;
