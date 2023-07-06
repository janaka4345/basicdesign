"use client";
import { motion } from "framer-motion";
import React from "react";

export default function page() {
  const variantsd = {
    hidden: {},
    visible: {},
  };
  const variants = {
    hidden: { x: "-190px" },
    visible: {
      x: "0px",
      transition: {
        duration: 2,
        type: "spring",
        repeat: Infinity,
      },
    },
  };
  return (
    <div className="pt-40">
      <motion.div
        className="w-52 h-52 border overflow-hidden border-green-400 ml-9"
        variants={variantsd}
        initial="hidden"
        whileHover="visible"
      >
        <motion.div
          className="w-52 h-52 bg-red-500 border"
          variants={variants}
        ></motion.div>
      </motion.div>

      <h1 className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
        deleniti quibusdam expedita velit quas quis harum vel corporis
        voluptatibus quaerat obcaecati, animi eos? Nostrum est consequuntur,
        labore repellendus{" "}
        <motion.span
          className="text-lg text-red-500 inline-block"
          initial={{ x: 0, y: 0 }}
          animate={{ x: -30, y: -30 }}
        >
          dolorem accusamus
        </motion.span>{" "}
        . Impedit culpa magnam illo suscipit placeat sapiente aspernatur
        provident iusto voluptates sed quod omnis, eligendi ratione?
        Reprehenderit exercitationem in corporis ex explicabo non? Maiores eum
        quas quasi, accusantium nisi odit?
      </h1>
    </div>
  );
}
