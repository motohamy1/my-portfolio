'use client'

import React from "react";
import SplitText from "./SplitText";

const Services = () => {
  const items = [
    {
      src: "/images/frontend.png",
      title: "Front-end Zone",
      description: "Interfaces that load fast and include everyone — React, Next.js, and a hard line on accessibility.",
    },
    {
      src: "/images/backend.png",
      title: "Back-end World",
      description: "APIs, databases, and queues that stay quick under real traffic — Node.js and PostgreSQL.",
    },
    {
      src: "/images/mobile.png",
      title: "Mobile Development",
      description: "One codebase, native feel: React Native apps that ship to iOS and Android.",
    },
    {
      src: "/images/responsive.png",
      title: "Responsive Design",
      description: "Layouts that hold up from a 320px phone to an ultrawide monitor.",
    },
  ];

  return (
    <div id="services" className="scroll-mt-[var(--appbar-offset)] bg-black/95 pt-8 pb-[calc(2rem+14px)] px-4 sm:px-6 lg:px-8 2xl:px-12 border-t border-cream/5 svc-zig">
      <div className="svc-zig__plate">
        <SplitText text="My services" className="text-3xl sm:text-5xl font-extrabold text-cream text-center py-2" delay={50} duration={0.4} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.5} rootMargin="0px" textAlign="center" />
      </div>
      <div className="svc-zig__frame">
        <div className="svc-zig__rows">
          {items.map((item, index) => (
            <div key={index} className={index % 2 === 1 ? "svc-zig__row svc-zig__row--flip" : "svc-zig__row"}>
              <div className="svc-zig__media"><img src={item.src} alt={`${item.title} — illustration`} loading="lazy" /></div>
              <div className="svc-zig__card"><h3 className="svc-zig__title">{item.title}</h3><p className="svc-zig__desc">{item.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
