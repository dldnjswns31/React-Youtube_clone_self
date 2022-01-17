import React from "react";
import VideoCard from "./videoCard";
import VideoPlayer from "./videoPlayer";

const VideoContainer = (props) => {
  const handleVideoClick = (item) => {
    props.onClick(item);
  };
  const selectedVideo = props.selectedVideo;
  return (
    <ul className="content-container">
      {selectedVideo ? (
        <div className="video-detail-wrapper">
          <VideoPlayer selectedVideo={props.selectedVideo} />
        </div>
      ) : null}
      <div className={"video-list-container" + (selectedVideo ? " right" : "")}>
        {props.video.map((video) => (
          <VideoCard
            key={video.etag}
            video={video}
            onClick={handleVideoClick}
          />
        ))}
      </div>
    </ul>
  );
};

export default VideoContainer;
