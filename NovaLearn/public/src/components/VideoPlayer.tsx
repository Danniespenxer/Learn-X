import React, { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  transcript?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, transcript }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const onTimeUpdate = () => {
    if (ref.current) {
      setProgress((ref.current.currentTime / ref.current.duration) * 100);
    }
  };

  return (
    <div>
      <video
        ref={ref}
        src={src}
        controls
        width="100%"
        onTimeUpdate={onTimeUpdate}
        style={{ borderRadius: 8, background: "#000" }}
      />
      <div style={{
        background: "#e0f2fe",
        borderRadius: 4,
        margin: "0.5em 0",
        width: `${progress}%`,
        height: 6
      }} />
      {transcript && (
        <details style={{ marginTop: "1em" }}>
          <summary>Show Transcript</summary>
          <pre style={{ background: "#f1f5f9", padding: "1em", borderRadius: 8 }}>{transcript}</pre>
        </details>
      )}
    </div>
  );
};

export default VideoPlayer;