"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogOverlay, DialogPortal } from "@radix-ui/react-dialog";
import Card from "@/components/customComponents/Card";

export default function Navbar() {
  return (
    <nav className="bg-transparent ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 mt-9">
        <a href="/" className="flex items-center">
          {/* logo here */}
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap ">
            BASIC/DEPT@
          </span>
        </a>
        {/* mobile nav here */}
        <div className="hidden w-full mx-auto md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0  md:bg-transparent dark:bg-transparent md:dark:bg-transparent ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-extrabold text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-extrabold text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-extrabold text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                NEWS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-extrabold text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                THINKING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-extrabold text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CAREERS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 font-extrabold text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <Dialog className="">
          <DialogTrigger>
            <div className=" ml-auto flex flex-row gap-2  py-2 pl-3 pr-4  rounded hover:scale-x-110">
              <span className=" w-3 h-3 bg-white rounded-full "></span>
              <span className=" w-3 h-3 bg-white rounded-full "></span>
              <span className=" w-3 h-3 bg-white rounded-full "></span>
            </div>
          </DialogTrigger>

          <DialogContent className="w-full h-full  flex flex-col">
            <DialogHeader>
              <DialogTitle>
                <h1 className="max-w-2xl mb-6 font-bold text-white lg:mb-8 md:text-lg lg:text-xl ">
                  INTERNAL WORKS
                </h1>
              </DialogTitle>
              <DialogDescription>
                <p className="max-w-2xl mb-6 font-bold text-white lg:mb-8 md:text-lg lg:text-xl ">
                  A collection of internal project and initiatives under the
                  BASIC/DEPT® brand.
                </p>
              </DialogDescription>
            </DialogHeader>
            <div>
              <div className="flex flex-row overflow-x-auto scroll-">
                <section className="flex flex-row shrink-0 ">
                  <Card
                    title="The Mountains"
                    by="by John Appleaseed"
                    src="/1.webp"
                  />
                  <Card
                    title="Sunset Cityscapes"
                    by="by Benjamin Cruz"
                    src="/2.webp"
                  />
                  <Card
                    title="18 Days Voyage"
                    by="by Alexei Borodin"
                    src="/3.webp"
                  />
                  <Card
                    title="Architecturals"
                    by="by Samantha Brooke"
                    src="/4.webp"
                  />
                  <Card
                    title="Architecturals"
                    by="by Samantha Brooke"
                    src="/5.webp"
                  />
                  {/* <Card
        title="The Mountains"
        by="by John Appleaseed"
        src="/assets/stories/architecturals.jpg"
      /> */}
                </section>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}
