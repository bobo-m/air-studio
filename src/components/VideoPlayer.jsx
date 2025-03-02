import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:flex relative w-full lg:h-screen items-center justify-center bg-black overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        loop
        muted
        controls
        className="w-full h-full object-contain"
        src={src}
      ></video>
    </div>
  );
};

export default VideoPlayer;
