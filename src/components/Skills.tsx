import React from "react";
import DomeGallery from "./ui/DomeGallery";
import {
  Atom,
  Server,
  FileCode,
  Wind,
  GitBranch,
  Database,
  PenTool,
  Zap,
  Smartphone,
  Box,
  Flame,
  Triangle,
  Leaf,
  Wand2,
} from "lucide-react";
import SplitText from "@/components/SplitText";

const skills = [
  {
    label: "Next.js",
    color: "#ffd8d1",
    textColor: "#5c2b29",
    icon: <Triangle className="w-full h-full fill-current" />,
  },
  {
    label: "React",
    color: "#dcf5ff",
    textColor: "#1e3a8a",
    icon: <Atom className="w-full h-full" />,
  },
  {
    label: "TypeScript",
    color: "#fff0e5",
    textColor: "#2e1065",
    icon: <FileCode className="w-full h-full" />,
  },
  {
    label: "Node.js",
    color: "#ffedca",
    textColor: "#78350f",
    icon: <Server className="w-full h-full" />,
  },
  {
    label: "Tailwind CSS",
    color: "#2C5364",
    textColor: "#ffffff",
    icon: <Wind className="w-full h-full" />,
  },
  {
    label: "PostgreSQL",
    color: "#EFFBBB",
    textColor: "#14532d",
    icon: <Database className="w-full h-full" />,
  },
  {
    label: "Supabase",
    color: "#2C5364",
    textColor: "#ffffff",
    icon: <Leaf className="w-full h-full" />,
  },
  {
    label: "Firebase",
    color: "#EFFBBB",
    textColor: "#14532d",
    icon: <Flame className="w-full h-full" />,
  },
  {
    label: "React Native",
    color: "#dcf5ff",
    textColor: "#1e3a8a",
    icon: <Smartphone className="w-full h-full" />,
  },
  {
    label: "Expo",
    color: "#fff0e5",
    textColor: "#2e1065",
    icon: <Zap className="w-full h-full" />,
  },
  {
    label: "Three.js",
    color: "#ffedca",
    textColor: "#78350f",
    icon: <Box className="w-full h-full" />,
  },
  {
    label: "GSAP",
    color: "#ffd8d1",
    textColor: "#5c2b29",
    icon: <Wand2 className="w-full h-full" />,
  },
  {
    label: "Figma",
    color: "#dcf5ff",
    textColor: "#1e3a8a",
    icon: <PenTool className="w-full h-full" />,
  },
  {
    label: "Git",
    color: "#EFFBBB",
    textColor: "#14532d",
    icon: <GitBranch className="w-full h-full" />,
  },
];

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="scroll-mt-[var(--appbar-offset)] pb-4 bg-black/95 flex flex-col h-[100svh] md:h-screen min-h-[620px] w-full overflow-hidden border-t border-cream/10 px-4 sm:px-6 lg:px-8 2xl:px-12"
      >
        <div className="flex-shrink-0 max-w-[1400px] mx-auto w-full">
          <SplitText
            text="Skills, Tools & Tech"
            className="text-3xl sm:text-5xl font-extrabold text-cream text-center pt-8 pb-2 px-4"
            delay={50}
            duration={0.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.5}
            rootMargin="0px"
            textAlign="center"
          />
        </div>
        <div className="flex-1 h-full w-full max-w-[1400px] mx-auto relative">
          <DomeGallery items={skills} fit={0.506} minRadius={150} maxRadius={620} />
        </div>
      </div>
    </>
  );
};

export default Skills;
