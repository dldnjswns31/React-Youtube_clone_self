import React from "react";
import VideoCard from "./videoCard";
import VideoPlayer from "./videoPlayer";

const VideoContainer = (props) => {
  const handleVideoClick = () => {
    props.onClick();
  };
  const isHidden = props.isHidden;
  {
    console.log(isHidden);
  }
  return (
    <ul className="content-container">
      {isHidden ? <VideoPlayer /> : null}
      {props.video.map((video) => (
        <VideoCard key={video.etag} video={video} onClick={handleVideoClick} />
      ))}
    </ul>
  );
};

export default VideoContainer;
