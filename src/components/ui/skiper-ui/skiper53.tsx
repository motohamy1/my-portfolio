"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HoverExpand_002 = ({items,className,}: {
  items: { src: string; title: string; description: string }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full px-5", className)}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        {items.map((item, index) => {
          const flip = index === items.length - 1;
          return (
            <div
              key={index}
              className="group grid grid-cols-1 items-stretch gap-6 overflow-hidden rounded-3xl py-2 md:grid-cols-2 md:gap-8"
            >
              <div
                className={cn(
                  "relative h-56 overflow-hidden rounded-2xl bg-card-large md:h-auto md:min-h-[280px]",
                  flip ? "md:order-2" : "md:order-1"
                )}
              >
                <Image
                  src={item.src}
                  alt={`${item.title} — illustration`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div
                className={cn(
                  "flex flex-col justify-center gap-3 px-2 py-4",
                  flip ? "md:order-1" : "md:order-2"
                )}
              >
                <h3 className="text-2xl font-bold text-cream">
                  {item.title}
                </h3>
                <p className="max-w-[58ch] text-lg leading-relaxed text-cream/90">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export { HoverExpand_002 };

/**
 * Built on Skiper 53 HoverExpand_002 — React + Framer Motion
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
