import React from "react";
import VideoCard from "./videoCard";

function VideoContainer(props) {
  return (
    <>
      <div className="content-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </>
  );
}

export default VideoContainer;
