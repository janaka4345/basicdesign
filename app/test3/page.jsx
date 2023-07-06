import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="relative mx-auto transition-all after:absolute after:left-0 after:-bottom-2 after:w-full after:h-2 after:bg-green-500 after:scale-x-0 after:origin-right after:duration-300 after:ease-in after:transition-all hover:after:scale-x-1 hover:after:origin-left w-fit  border-2">
        hi yaaaaa
        {/* <div className=" absolute bg-green-500 w-3 h-3 bott"></div> */}
      </h1>

      <h1
        className=" w-fit after:w-full after:h-2 after:bg-green-500 relative mx-auto after:absolute after:translate-x-[calc(-100%_-_0.1rem] bg-current 
        h-[0.1rem] after:content-[''] hover:after:animate-[var(--bd-time-transition-250)_var(--ease-out)_var(--bd-time-delay-none)_trace-out_forwards]
        after:left-0 after:bottom-0"
      >
        suppp
      </h1>
    </div>
  );
}
