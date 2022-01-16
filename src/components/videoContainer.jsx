import React from "react";
import VideoCard from "./videoCard";

const VideoContainer = (props) => (
  <ul className="content-container">
    {props.video.map((video) => (
      <VideoCard key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoContainer;

// import React, { useEffect, useState } from "react";
// import VideoCard from "VideoCard";

// function VideoContainer(props) {
//   return (
//     <>
//       <div className="content-container">
//         <VideoCard />
//       </div>
//     </>
//   );
// }

// export default VideoContainer;
