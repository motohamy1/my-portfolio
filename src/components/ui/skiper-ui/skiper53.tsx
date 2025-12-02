"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper53 = () => {


  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand_002 className="" items={[]} />
    </div>
  );
};

export { Skiper53 };

const HoverExpand_002 = ({items,className,}: {
  items: { src: string; title: string; description: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full flex-col items-center justify-center gap-1">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group relative flex w-full cursor-pointer gap-4 overflow-hidden rounded-3xl"
              initial={{ height: "10rem" }}
              animate={{
                height: activeImage === index ? "26rem" : "10rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onHoverStart={() => setActiveImage(index)}
              onHoverEnd={() => setActiveImage(null)}
            >
              {/* Image Container */}
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                initial={{ width: "100%" }}
                animate={{
                  width: activeImage === index ? "50%" : "100%",
                }}
                transition={{ duration: 0.3, ease: "easeIn" }}
              >
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/50 to-transparent"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-5"
                    >
                      <p className="text-left text-xs text-white/50">

                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                    src={item.src}
                  className="size-full object-cover"

                />
              </motion.div>

              {/* Text Content Container */}
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, width: "0%" }}
                    animate={{ opacity: 1, x: 0, width: "50%" }}
                    exit={{ opacity: 0, x: 20, width: "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col justify-center gap-3 pr-6"
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-serif font-bold text-cream"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-xl font-serif leading-relaxed text-white"
                    >
                      {item.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs text-gray-400"
                    >

                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_002 };

/**
 * Skiper 53 HoverExpand_002 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
