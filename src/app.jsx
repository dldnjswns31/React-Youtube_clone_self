import "./app.css";
import Search from "./components/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoContainer from "./components/videoContainer";
import { useState } from "react";

function App() {
  useState();
  return (
    <>
      <Search />
      <VideoContainer />
    </>
  );
}

export default App;
