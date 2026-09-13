'use client'
import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SplitText from "@/components/SplitText";
import { Github } from "lucide-react";

// Marks the auto-scroll duplicate cards. They are hidden from assistive tech
// and keyboard tab order, but stay hit-testable so their tilt/hover animation
// matches the originals. (Using `inert` would disable hover via pointer-events.)
const DuplicateContext = createContext(false);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  viewProject?: string;
  github?: string;
  portrait?: boolean;
  placeholder?: boolean;
}

const ProjectCard = ({ title, description, image, viewProject, github, portrait = false, placeholder = false }: ProjectCardProps) => {
  const isDuplicate = useContext(DuplicateContext);
  const [imgError, setImgError] = useState(false);
  const hasView = Boolean(viewProject && viewProject !== "#");
  const hasGithub = Boolean(github && github !== "#");
  const imageFrame = portrait ? "aspect-[9/13.5]" : "h-48";
  const imageSizes = portrait
    ? "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 75vw"
    : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";
  const viewClass = `inline-flex items-center min-h-[44px] px-4 py-2 rounded-xl text-sm font-bold text-neutral-900 hover:underline underline-offset-4 cursor-pointer whitespace-nowrap${portrait ? " justify-center" : ""}`;
  const githubClass = `inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl bg-black text-white text-xs font-bold hover:opacity-80 cursor-pointer whitespace-nowrap${portrait ? " justify-center" : ""}`;

  return (
    <CardContainer>
      <CardBody className="bg-cream relative group/card border-black/[0.1] w-full h-auto rounded-2xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2">
          {description}
        </CardItem>
        <CardItem translateZ="20" className="w-full mt-4">
          {imgError ? (
            <div
              className={`flex ${imageFrame} w-full items-center justify-center rounded-xl bg-gradient-to-br from-card-one via-card-two to-card-three`}
              role="img"
              aria-label={`${title} — preview unavailable`}
            >
              <span className="text-5xl font-extrabold text-black/15" aria-hidden="true">
                {title.charAt(0)}
              </span>
            </div>
          ) : (
            <Image
              src={image}
              width={1000}
              height={1000}
              sizes={imageSizes}
              className={`${imageFrame} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
              alt={`${title} — project screenshot`}
              onError={() => setImgError(true)}
            />
          )}
        </CardItem>
        {(hasView || hasGithub || placeholder) && (
          <div
            data-tilt-freeze
            className={`relative z-10 mt-10 flex gap-3 ${portrait ? "flex-col items-stretch" : "flex-wrap justify-between items-center"}`}
          >
            {hasView ? (
              <a
                href={viewProject}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isDuplicate ? -1 : undefined}
                className={viewClass}
              >
                View Project →
              </a>
            ) : placeholder ? (
              <span className={`${viewClass} opacity-60`} aria-disabled="true">
                View Project →
              </span>
            ) : <span />}
            {hasGithub ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isDuplicate ? -1 : undefined}
                className={githubClass}
              >
                <Github size={14} aria-hidden="true" />
                GitHub →
              </a>
            ) : placeholder ? (
              <span className={`${githubClass} opacity-60`} aria-disabled="true">
                <Github size={14} aria-hidden="true" />
                GitHub →
              </span>
            ) : null}
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
}

const AUTO_SCROLL_SPEED = 30; // px per second

const DragRow = ({ children, label, autoScroll = false }: { children: React.ReactNode; label: string; autoScroll?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const start = useRef({ x: 0, scrollLeft: 0, moved: false });
  const pressed = useRef(false);

  useEffect(() => {
    if (!autoScroll) return;
    const el = ref.current;
    if (!el) return;
    const enter = () => setPaused(true);
    const leave = () => setPaused(false);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, [autoScroll]);

  useEffect(() => {
    if (!autoScroll || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = now - last;
      last = now;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const period = (el.scrollWidth + gap) / 2;
      el.scrollLeft += (AUTO_SCROLL_SPEED * dt) / 1000;
      if (el.scrollLeft >= period) el.scrollLeft -= period;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [autoScroll, paused]);

  return (
    <div
      ref={ref}
      aria-label={label}
      tabIndex={0}
      className={`flex gap-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        dragging ? "cursor-grabbing select-none" : "cursor-default"
      }`}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        const el = ref.current;
        if (!el) return;
        // Do NOT capture or preventDefault here: doing so would swallow the
        // click on the card's links (pointer capture retargets the click to
        // the row). Only start a drag once the pointer actually moves.
        pressed.current = true;
        start.current = { x: e.clientX, scrollLeft: el.scrollLeft, moved: false };
      }}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || !pressed.current) return;
        const dx = e.clientX - start.current.x;
        if (!start.current.moved) {
          if (Math.abs(dx) <= 4) return;
          start.current.moved = true;
          setDragging(true);
          e.preventDefault();
          try {
            el.setPointerCapture(e.pointerId);
          } catch {
            // capture is best-effort; scrolling still works while the pointer is over the row
          }
        }
        el.scrollLeft = start.current.scrollLeft - dx;
      }}
      onPointerUp={(e) => {
        const el = ref.current;
        if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
        pressed.current = false;
        setDragging(false);
      }}
      onPointerCancel={() => {
        pressed.current = false;
        setDragging(false);
      }}
      onClickCapture={(e) => {
        if (start.current.moved) {
          e.preventDefault();
          e.stopPropagation();
        }
        start.current.moved = false;
      }}
    >
      {children}
      {autoScroll && (
        <DuplicateContext.Provider value={true}>
          <div className="contents" aria-hidden="true">
            {children}
          </div>
        </DuplicateContext.Provider>
      )}
    </div>
  );
}

const Projects = () => {
  const webProjects = [
    { title: "StoreIt Cloud Platform", description: "A modern, highly-performant alternative to Google Drive for secure, seamless cloud storage management and file sharing.", image: "/images/storeit.png", viewProject: "https://store-management-7oczrwqt0-motohamys-projects.vercel.app/", github: "https://github.com/motohamy1/cloud-storage-platform" },
    { title: "Bookify", description: "An interactive AI library platform where you can upload your favorite books and discuss them with an intelligent AI voice companion.", image: "/images/bookify.png", viewProject: "https://bookify-kohl-six.vercel.app/", github: "https://github.com/motohamy1/bookify" },
    { title: "Stock Tracker", description: "Real-time stock tracking and analysis tools using modern MERN stack tools and AI ", image: "/images/stock-market.jpg", viewProject: "https://stock-tracker01-47mkeyzg3-motohamys-projects.vercel.app/", github: "https://github.com/motohamy1/stock-tracker" },
    { title: "Medegypt Care Hub", description: "Simple and all-in-one website for Hypertensive and diabetic patients care hub ", image: "/images/medegypt-care.png", viewProject: "https://medegypt-care-hub.onrender.com/", github: "https://github.com/motohamy1/medegypt-care-hub" },
    { title: "Drinks Animated website", description: "Satisfyingly smooth yet powerful animated website built with GSAP animations for a drinks website", image: "/images/gsap-website.jpg", viewProject: "https://smoothy-app.vercel.app/", github: "https://github.com/motohamy1/smoothy-app" },
    { title: "AI resume Analyser", description: "powerful free AI resume analyser tool that helps you get the best job offer", image: "/images/AI-resume.jpg", viewProject: "https://ai-resume-analyzer-roan-phi.vercel.app/upload", github: "https://github.com/motohamy1/ai-resume-analyzer" },
    { title: "Restaurant website", description: "Modern restaurant food delivery with fast response times", image: "/images/tasty.png", viewProject: "https://spongyfood.onrender.com/", github: "https://github.com/motohamy1/spongyfood" },
    { title: "Movies website", description: "Brings the latest Trending Movies and TV Shows with AI recommendations", image: "/images/movies-web.png", viewProject: "https://movie-app-c8pp.onrender.com/", github: "https://github.com/motohamy1/Movie-app" },
  ]

  const mobileProjects = [
    { title: "Nizam Life Organizer", description: "An all-in-one life organizer that folds tasks, projects, reminders, and daily planning into one calm, offline-first app — real-time synced and fully bilingual in Arabic (RTL) and English.", image: "/images/mobile.png", viewProject: "#", github: "https://github.com/motohamy1/Nizam-app", placeholder: true, portrait: true },
    { title: "MedArena Clinical Assistant", description: "A point-of-care clinical decision-support app for physicians and residents — fast, grounded answers built to feel like a precise medical instrument, powered by vector search over clinical knowledge.", image: "/images/mobiledevelopinfo.png", viewProject: "#", github: "https://github.com/motohamy1/medArena", placeholder: true, portrait: true },
    { title: "TasteMood Food Decider", description: "An AI decision engine for food that reads your taste and mood, then picks the meal — it ends the nightly \"what do we eat?\" standoff in a single tap.", image: "/images/mobile.png", viewProject: "#", github: "https://github.com/motohamy1/TasteMood", placeholder: true, portrait: true },
    { title: "Finance Tracker App", description: "A personal finance tracker that captures spending from a photo — receipt OCR pulls the numbers in, so budgets and categories stay current without any manual entry.", image: "/images/mobiledevelopinfo.png", viewProject: "#", github: "https://github.com/motohamy1/finance-tracker-app", placeholder: true, portrait: true },
  ]

  return (
    <div id='projects' className='scroll-mt-[var(--appbar-offset)] bg-black/95 py-8 px-4 sm:px-6 lg:px-8 2xl:px-12 border-t border-forest/20'>
      <div className="mx-auto max-w-[1400px]">
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
        <h2 className='text-3xl font-bold font-cursive text-cream mb-10 text-center'>Web Development</h2>
        <div className="flex flex-col gap-8">
          {[webProjects.slice(0, 4), webProjects.slice(4)].map((row, rowIndex) => (
            <DragRow key={rowIndex} label={`Web projects row ${rowIndex + 1}`} autoScroll>
              {row.map((project, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 md:w-[calc((100%_-_2rem)/2)] lg:w-[calc((100%_-_4rem)/3)]"
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </DragRow>
          ))}
        </div>
      </div>
      {/* Mobile Development Section */}
      <div className='mb-10'>
        <h2 className='text-3xl font-bold font-cursive text-cream mb-10 text-center'>Mobile Development</h2>
        <DragRow label="Mobile projects" autoScroll>
          {mobileProjects.map((project, index) => (
            <div
              key={index}
              className="w-[75%] shrink-0 sm:w-[calc((100%_-_2rem)/2)] md:w-[calc((100%_-_4rem)/3)] lg:w-[calc((100%_-_6rem)/4)]"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </DragRow>
      </div>
      </div>
    </div>
  )
}

export default Projects
