import Image from "next/image";
import React from "react";

export default function Details() {
  return (
    <div className="">
      <section className="bg-white dark:bg-gray-900 block">
        <div className="grid w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  lg:grid-rows-1 grid-cols-12 grid-rows-2">
          <div className="mr-auto ml-6 place-self-center col-span-12 my-auto row-span-1  lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800 dark:text-white">
              BASIC/DEPT® is a global branding and digital design agency
              building products, services, and eCommerce experiences that turn
              cultural values into company value.
            </h1>
            {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p> */}

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              SEE THE WORK
            </a>
          </div>
          <div className="col-span-12 row-span-2 lg:row-span-1 lg:mt-0 lg:col-span-5 ">
            <Image
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-full"
              src="/logo.svg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
