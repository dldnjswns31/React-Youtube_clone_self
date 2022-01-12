import React from "react";

function VideoCard(props) {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img src="https://i.ytimg.com/vi/P2Li7mjadIA/hqdefault.jpg" />
      </div>
      <div className="video-description">
        <span className="video-title">123</span>
        <span className="video-channel">456</span>
      </div>
    </div>
  );
}

export default VideoCard;
