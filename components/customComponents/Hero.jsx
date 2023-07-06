import React from "react";

export default function Hero() {
  return (
    <section className="  w-full h-[90dvh] ">
      <div className="absolute -z-10 w-full h-[100dvh]  top-0">
        <video
          autoPlay
          muted
          loop
          className=" w-full h-[100dvh] object-cover object-center "
        >
          <source src="reelloop.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </section>
  );
}
