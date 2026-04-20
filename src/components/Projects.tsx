'use client'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SplitText from "@/components/SplitText";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  viewProject?: string;
  github?: string;
}

const ProjectCard = ({ title, description, image, viewProject, github }: ProjectCardProps) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url?: string) => {
    if (!url || url === "#") {
      e.preventDefault();
      return;
    }
  };

  return (

    <CardContainer className="inter-var">
      <CardBody className="bg-cream relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-2xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="a"
            href={viewProject || "#"}
            target={viewProject && viewProject !== "#" ? "_blank" : undefined}
            rel={viewProject && viewProject !== "#" ? "noopener noreferrer" : undefined}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, viewProject)}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline cursor-pointer"
          >
            View Project →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="a"
            href={github || "#"}
            target={github && github !== "#" ? "_blank" : undefined}
            rel={github && github !== "#" ? "noopener noreferrer" : undefined}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, github)}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-80 cursor-pointer"
          >
            GitHub →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

const Projects = () => {
  const webProjects = [
    { title: "StoreIt Cloud Platform", description: "A modern, highly-performant alternative to Google Drive for secure, seamless cloud storage management and file sharing.", image: "/images/storeit.png", viewProject: "https://store-management-7oczrwqt0-motohamys-projects.vercel.app/" },
    { title: "Bookify", description: "An interactive AI library platform where you can upload your favorite books and discuss them with an intelligent AI voice companion.", image: "/images/bookify.png", viewProject: "https://bookify-kohl-six.vercel.app/" },
    { title: "Stock Tracker", description: "Real-time stock tracking and analysis tools using modern MERN stack tools and AI ", image: "/images/stock market.jpg", viewProject: "https://stock-tracker01-47mkeyzg3-motohamys-projects.vercel.app/", github: "https://github.com/motohamy1/stock-tracker" },
    { title: "Medegypt Care Hub", description: "Simple and all-in-one website for Hypertensive and diabetic patients care hub ", image: "/images/medegypt-care.png", viewProject: "https://medegypt-care-hub.onrender.com/", github: "https://github.com/motohamy1/medegypt-care-hub" },
    { title: "Drinks Animated website", description: "Satisfyingly smooth yet powerful animated website built with GSAP animations for a drinks website", image: "/images/GSAP website.jpg", viewProject: "https://smoothy-app.vercel.app/", github: "https://github.com/motohamy1/smoothy-app" },
    { title: "AI resume Analyser", description: "powerful free AI resume analyser tool that helps you get the best job offer", image: "/images/AI-resume.jpg", viewProject: "https://ai-resume-analyzer-roan-phi.vercel.app/upload", github: "https://github.com/motohamy1/ai-resume-analyzer" },
    { title: "Restaurant website", description: "Modern restaurant food delivery with fast response times", image: "/images/tasty.png", viewProject: "https://spongyfood.onrender.com/", github: "https://github.com/motohamy1/spongyfood" },
    { title: "Movies website", description: "Brings the latest Trending Movies and TV Shows with AI recommendations", image: "/images/movies-web.png", viewProject: "https://movie-app-c8pp.onrender.com/", github: "https://github.com/motohamy1/Movie-app" },
  ]

  // const mobileProjects = [
  //   { title: "Movie app ", description: "Cross-platform movies mobile app with React Native", image: "/images/movies-web.png", viewProject: "https://example.com", github: "https://github.com/motohamy1/mobile-movie-app" },
  // ]

  return (
    <div id='projects' className='scroll-mt-24 bg-darker/95 py-8 px-4 sm:px-6 lg:px-8 mx-auto border-t border-forest/20 shadow-inner'>
      <div className="max-w-7xl mx-auto">
        <div>
            <SplitText
                text="Projects I've worked on"
                className="text-3xl sm:text-5xl font-extrabold text-cream text-center py-4"
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
      {/* Web Development Section */}
      <div className='mb-10'>
        <h2 className='text-3xl font-bold font-cursive text-cream mb-10 text-center text-shadow-lg shadow-forest'>Web Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {webProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Mobile Development Section */}
      {/* <div>
        <h2 className='text-2xl font-bold text-cream mb-6 text-center'>Mobile Development</h2>
        <p className='text-cream/60 text-center text-sm mb-4'>← Drag to explore →</p>
        <DragCarousel>
          {mobileProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </DragCarousel>
      </div> */}
      </div>
    </div>
  )
}

export default Projects
