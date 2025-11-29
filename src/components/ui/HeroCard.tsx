import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, FileText, ArrowUpRight, Globe, Contact } from 'lucide-react';

interface HeroCardProps {
  websiteUrl?: string;
  githubUrl?: string;
  resumeUrl?: string;
  imageSrc?: string; // Path to your photo
}

const HeroCard: React.FC<HeroCardProps> = ({
  websiteUrl = "https://yourwebsite.com",
  githubUrl = "https://github.com/yourusername",
  resumeUrl = "/resume.pdf",
  imageSrc = "/images/personal.png" // Replace with your actual image path
}) => {
  return (
    // Main Container: Fills flex-1 of the parent
    <div className="relative w-full h-full min-h-[500px] flex items-end justify-center p-4">
      
      {/* CARD BACKGROUND */}
      <div className="relative w-full h-[95%] bg-cream rounded-[20px]  ">
        
        {/* Signature (Decorative) */}
        <div className="absolute top-8 left-8 z-10 opacity-90">
          {/* You can replace this text with an SVG image of your actual signature */}
          <span className="font-serif italic text-4xl text-[#722F37]">
            Mahmoud.Eltohamy
          </span>
        </div>

        {/* MAIN IMAGE */}
        <div className="absolute inset-0 flex items-end justify-center pt-12">
          {/* 
             NOTE: Ensure your image has a transparent background.
             'object-cover' or 'object-contain' depends on your image dimensions.
          */}
          <div className="relative w-full h-full">
            <Image 
              src={imageSrc}
              alt="Doctor Profile"
              fill
              className="w-[500px] h-[500px] object-contain"
              priority
            />
          </div>
        </div>

        {/* --- TOP RIGHT SECTION (Website Link) --- */}
        <div className="absolute top-0 right-0 z-20 bg-darker p-4 rounded-bl-[20px] ">
           <Link 
             href={websiteUrl}              
             target="_blank"
             className="flex items-center justify-center w-22 h-22 bg-[#722F37] rounded-2xl text-black hover:bg-[#fbf7ba] hover:text-black transition-colors duration-300"
             aria-label="Visit Website"
           >
             <Globe size={32} strokeWidth={1.5} />
           </Link>

           {/* CSS Trick for "Inverted Border Radius" (The smooth curve effect) */}
           {/* Left side smoother */}
          <div className="absolute top-0 left-[-40px] w-10 h-10 rounded-t-[40px] shadow-[20px_-20px_0_0_#0f2028] pointer-events-none"></div>
           {/* Bottom side smoother */}
          <div className="absolute bottom-[-40px] right-0 w-10 h-10 rounded-t-[40px] shadow-[20px_-20px_0_0_#0f2028] pointer-events-none"></div>
        </div>

        {/* --- BOTTOM LEFT SECTION (Sidebar Icons) --- */}
        <div className="absolute bottom-0 left-0 z-20 bg-darker p-4 rounded-tr-[20px]">
          
          {/* Icon Container */}
          <div className="flex flex-col gap-3 bg-transparent p-2 rounded-[20px]">
            
            {/* 1. GITHUB ICON */}
            <Link 
              href={githubUrl} 
              target="_blank"
              className="group relative flex items-center justify-center w-22 h-22 bg-[#722F37] rounded-full overflow-hidden hover:brightness-95 hover:bg-[#fbf7ba] transition-all"
              title="GitHub Profile"
            >
               <Github className="text-black group-hover:scale-110 hover:text-black transition-transform" size={24} />
            </Link>

            {/* 2. RESUME / DOWNLOAD ICON */}
            <Link 
              href={resumeUrl} 
              target="_blank" // or download={true}
              className="group flex items-center justify-center w-14 h-14 bg-[#722F37] rounded-2xl overflow-hidden hover:brightness-95 hover:bg-[#fbf7ba] transition-all"
              title="Download Resume"
            >
               <FileText className="text-black group-hover:scale-110 hover:text-black transition-transform" size={24} />
            </Link>

            {/* 3. CONTACT SECTION ICON (Black) */}
            <Link 
              href="#contact" 
              className="group flex items-center justify-center w-14 h-14 bg-black rounded-2xl overflow-hidden hover:bg-[#fbf7ba] transition-all"
              title="Contact Me"
            >
               <Contact className="text-white group-hover:rotate-45 hover:text-black transition-transform" size={24} />
            </Link>
          </div>

           {/* CSS Trick for "Inverted Border Radius" */}
           {/* Top side smoother */}
          <div className="absolute top-[-40px] left-0 w-10 h-10 rounded-b-[20px] shadow-[-20px_20px_0_0_#0f2028] pointer-events-none"></div>
           {/* Right side smoother */}
          <div className="absolute bottom-0 right-[-40px] w-10 h-10 rounded-b-[20px] shadow-[-20px_20px_0_0_#0f2028] pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export default HeroCard;