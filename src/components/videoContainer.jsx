import React from "react";
import VideoCard from "./videoCard";

const VideoContainer = (props) => {
  return (
    <ul className="content-container">
      {props.video.map((video) => (
        <VideoCard key={video.etag} video={video} />
      ))}
    </ul>
  );
};

export default VideoContainer;
