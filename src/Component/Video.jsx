import React from "react";

export default function VideoSection() {
  return (
    <div className="lg:col-span-2 flex justify-center py-16">
      <video
        src="/videos/intro.mp4"
        controls
        autoPlay
        muted
        loop
        className="w-full max-w-4xl rounded-3xl shadow-lg"
      />
    </div>
  );
}
