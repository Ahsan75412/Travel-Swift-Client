import { useEffect, useRef } from "react";
import videoCover from '../../../assets/Hotels/CoverVideo/TravelVideoCover.mp4'


const VideoBackground = () => {
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="App">
      <div>
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto",borderRadius:"20px" }}
          playsInline
          loop
          muted
          // controls
          alt="All the devices"
          // src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
          src={videoCover}
          ref={videoEl}
        />
      </div>
    </div>
  );
};

export default VideoBackground;