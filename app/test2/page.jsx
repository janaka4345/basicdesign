"use client";
import React, { useRef } from "react";
import { motion, useAnimate } from "framer-motion";

export default function page() {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const reft = useRef();
  const variantsDe = {
    hidden: {
      x: 0,
    },
    visibal: {
      x: 300,
    },
  };

  return (
    <div>
      <motion.div
        ref={scope}
        className="w-52 h-52 bg-red-500"
        onHoverStart={() =>
          animate(scope.current, { width: "104px" }, { duration: 2 })
        }
        onHoverEnd={() =>
          animate(scope.current, { width: "50px" }, { duration: 2 })
        }
      ></motion.div>
      <motion.div
        ref={reft}
        className="w-52 h-52 bg-green-500"
        onHoverStart={() =>
          animate(reft.current, { width: "104px" }, { duration: 2 })
        }
        onHoverEnd={() =>
          animate(reft.current, { width: "50px" }, { duration: 2 })
        }
      ></motion.div>
      {/* <motion.div
        className="w-52 h-52 mx-auto bg-slate-500"
        initial={{
          scaleX: 0.2,
        }}
        onHoverStart={(e) => {
          e.target.style.transformOrigin = "left";
          e.target.style.transform.scaleX = 1;
          //   style = { originX: 0 };
        }}
        // style={{ originX: 0 }}
        onHoverEnd={(e) => {
          e.target.style.transformOrigin = "right";
          e.target.style.transform.scaleX = 0.2;
          //   style = { originX: 1 };
        }}
        // whileHover={{
        //   scaleX: 1,
        //   transition: {
        //     duration: 2,
        //     type: "tween",
        //   },
        // }}
      ></motion.div> */}
      <div className="realtive group border border-1 w-52 h-52">
        <div className="absolute flex inset-0 w-52 h-52 mx-auto bg-slate-500 origin-left scale-x-[0.2] duration-300 ease-in   group-hover:scale-x-100 "></div>
      </div>
    </div>
  );
}
