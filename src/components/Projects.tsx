'use client'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import DragCarousel from "./ui/DragCarousel";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  viewProject?: string;
  github?: string;
}

const ProjectCard = ({ title, description, image, viewProject, github }: ProjectCardProps) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-cream relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[25rem] h-auto rounded-xl p-6 border">
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
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline cursor-pointer"
        >
          View Project →
        </CardItem>
        <CardItem 
          translateZ={20} 
          translateX={40} 
          as="a" 
          href={github || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-80 cursor-pointer"
        >
          GitHub →
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
)

const Projects = () => {
  const webProjects = [
    { title: "Web Project 1", description: "A modern web application built with React and Next.js", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Web Project 2", description: "E-commerce platform with payment integration", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Web Project 3", description: "Dashboard with real-time data visualization", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Web Project 4", description: "Social media platform with chat features", image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Web Project 5", description: "Social media platform with chat features", image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
  ]

  const mobileProjects = [
    { title: "Mobile Project 1", description: "Cross-platform mobile app with React Native", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Mobile Project 2", description: "Fitness tracking app with health integrations", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Mobile Project 3", description: "Food delivery app with real-time tracking", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Mobile Project 4", description: "Banking app with secure authentication", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
    { title: "Mobile Project 5", description: "Banking app with secure authentication", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop", viewProject: "https://example.com", github: "https://github.com" },
  ]

  return (
    <div id='projects' className='scroll-mt-27 bg-darker rounded-2xl py-10 px-6'>
      {/* Web Development Section */}
      <div className='mb-10'>
        <h2 className='text-2xl font-bold text-cream mb-6 text-center'>Web Development</h2>
        <p className='text-cream/60 text-center text-sm mb-4'>← Drag to explore →</p>
        <DragCarousel>
          {webProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </DragCarousel>
      </div>

      {/* Mobile Development Section */}
      <div>
        <h2 className='text-2xl font-bold text-cream mb-6 text-center'>Mobile Development</h2>
        <p className='text-cream/60 text-center text-sm mb-4'>← Drag to explore →</p>
        <DragCarousel>
          {mobileProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </DragCarousel>
      </div>
    </div>
  )
}

export default Projects
