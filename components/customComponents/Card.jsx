import Image from "next/image";
import React from "react";

export default function Card({ title, by, src }) {
  return (
    <div className="lg:w-1/4 w-[90%] h-[70dvh]  cursor-pointer  relative mx-auto group-hover:scale-110 group hover:-translate-y-5   rounded-lg overflow-hidden dark:bg-gray-800 ">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className=" w-full h-full rounded-lg object-cover object-center "
        src={src}
        alt=""
      />

      <div className="p-5  flex-col   hidden group-hover:flex absolute z-50 bg-gradient-to-t from-black from-15% inset-0">
        <a
          // href="#"
          className="mt-auto"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-200 ">{by}</p>
        <hr className="h-px my-8 bg-gray-200 border-0 " />
        <a
          //   href="#"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read Story
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
