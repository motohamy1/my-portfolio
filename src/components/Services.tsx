'use client'

import React from "react";
import { HoverExpand_002 } from "./ui/skiper-ui/skiper53";
import SplitText from "./SplitText";

const Services = () => {
  const items = [
    {
      alt: "Tyler Durden",
      code: "Tyler Durden",
      src: "./images/frontend.png"
    },
    {
      alt: "The Narrator",
      code: "The Narrator",
      src:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Iceland",
      code: "Iceland",
      src:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Japan",
      code: "Japan",
      src:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Norway",
      code: "Norway",
      src:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "New Zealand",
      code: "New Zealand",
      src:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Canada",
      code: "Canada",
      src:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

    const handleAnimationComplete = () => {
        // Add any logic you want to execute when the animation completes
        console.log('Split text animation completed');
    };

  return (
    <div id="services" className="scroll-mt-25">
        <SplitText
            text="My services"
            className="text-5xl font-extrabold text-rust text-center py-7"
            delay={50}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.5}
            rootMargin="0px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
        />

        <HoverExpand_002 items={items} className="w-full max-w-full px-2 bg-cream rounded-2xl py-2" />
    </div>
  );
};

export default Services;