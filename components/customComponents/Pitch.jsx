import Image from "next/image";
import React from "react";

export default function Pitch() {
  return (
    <div className="">
      <section className="bg-white dark:bg-gray-900 block">
        <div className="grid w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  lg:grid-rows-1 grid-cols-12 grid-rows-[1fr,2fr]">
          <div className=" mr-auto ml-6 place-self-center col-span-12 my-auto row-span-1  lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold  text-gray-800 tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              ADWEEK AGENCY SPOTLIGHT
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              ABOUT US
            </a>
          </div>
          <div className="col-span-12 row-span-2 lg:row-span-1 lg:mt-0 lg:col-span-5 ">
            {/* <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-full"
              src="/tennisPlayer.webp"
              alt="mockup"
            /> */}
            <video
              autoPlay
              muted
              loop
              className=" w-full h-full object-cover object-center "
            >
              <source src="CultureLoop.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
