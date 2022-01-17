import React from "react";

const VideoCard = (props) => {
  const handleVideoClick = () => {
    props.onClick(props.video);
  };

  return (
    <div className="video-card" onClick={handleVideoClick}>
      <div className="video-thumbnail">
        <img src={props.video.snippet.thumbnails.high.url} />
      </div>
      <div className="video-description">
        <span className="video-title">{props.video.snippet.title}</span>
        <span className="video-channel">
          {props.video.snippet.channelTitle}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;

// import React from "react";

// function VideoCard(props) {
//   return (
//     <div className="video-card">
//       <div className="video-thumbnail">
//         <img src={props.thumbnail} />
//       </div>
//       <div className="video-description">
//         <span className="video-title">{props.title}</span>
//         <span className="video-channel">{props.channelTitle}</span>
//       </div>
//     </div>
//   );
// }

// export default VideoCard;
