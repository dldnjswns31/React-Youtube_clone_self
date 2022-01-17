import React from "react";

const VideoPlayer = (props) => {
  return (
    <>
      <div className="iframe-box">
        <iframe
          src={`https://www.youtube.com/embed/${
            props.selectedVideo.kind == "youtube#video"
              ? props.selectedVideo.id
              : props.selectedVideo.id.videoId
          }`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="select-video-title">
        {props.selectedVideo.snippet.title}
      </h1>
      <span className="select-video-description">
        {props.selectedVideo.snippet.description}
      </span>
    </>
  );
};

export default VideoPlayer;
