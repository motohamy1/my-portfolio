'use client'

import React from "react";
import { HoverExpand_002 } from "./ui/skiper-ui/skiper53";
import SplitText from "./SplitText";

const Services = () => {
  const items = [
    {
      src: "./images/frontend.png",
      title: "Front-end Zone",
      description: "Have you ever encountered slow-loading pages or accessibility barriers on a website? In my frontend development work, I tackle these challenges head-on by implementing performance optimizations like lazy loading and code splitting, as well as prioritizing accessibility standards. This ensures that users have a smooth, inclusive, and efficient experience on every visit.",
    },
    {
      src: "/images/backend.png",
      title: "Back-end World",
      description: "In my backend development work, I address common challenges such as slow server response times and data management inefficiencies. By implementing robust APIs, optimizing database queries, and ensuring scalable architecture, I help clients achieve faster, more reliable performance and a seamless user experience.",
    },
    {

      src: "/images/responsive.png",
      title: "Responsive Design Tweeks",
      description: "In my web development practice, I prioritize creating responsive designs that ensure a seamless user experience across all devices. By employing fluid grids, flexible images, and media queries, I help clients reach their audience effectively, no matter what device they're using. This approach not only boosts engagement but also enhances accessibility and usability.",
    },
    {
      src: "/images/mobile.png",
        title: "Mobile Development Fun",
        description: "Have you ever wondered how to create high-performance, cross-platform mobile apps with a native look and feel? React Native makes it possible by allowing developers to use JavaScript and React to build apps that run seamlessly on both iOS and Android. By combining this with powerful backend tools like Node.js, Firebase, and Supabase, you can create a full-stack mobile solution that’s both scalable and efficient.",
    }
  ];



  return (
    <div id="services" className="scroll-mt-17 bg-darker">
        <SplitText
            text="My services"
            className="text-5xl  font-extrabold text-cream text-center py-7"
            delay={100}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.5}
            rootMargin="0px"
            textAlign="center"
        />

        <HoverExpand_002 items={items} className="w-full max-w-full px-2 bg-darker rounded-2xl py-2" />
    </div>
  );
};

export default Services;