import "./app.css";
import Search from "./components/search";
import { useEffect, useState } from "react";
import VideoContainer from "./components/videoContainer";
import React from "react";

function App() {
  const [videos, setVideo] = useState([]);

  // const inputRef = React.createRef();
  // let value = inputRef.current.value;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDD8izz7zlkkCSF97v-Qw0mEJQHuIADzxI",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const handleSubmit = (value) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyDD8izz7zlkkCSF97v-Qw0mEJQHuIADzxI`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <Search onSubmit={handleSubmit} />
      <VideoContainer video={videos} />
    </>
  );
}

export default App;
