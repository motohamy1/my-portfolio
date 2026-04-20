'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Contact, GithubIcon, FileText } from "lucide-react";
import Link from "next/link";
import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const frontImage = '/images/personal.png';
    const backImage = '/images/cartoon.png';
    const containerRef = useRef<HTMLDivElement>(null);
    const frontImageRef = useRef<HTMLDivElement>(null);
    const backImageRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(".stat-card", {
            backgroundColor: "#EFFBBB",
            duration: 4,
            delay: 0.5,
            stagger: 0.2,
            ease: 'bounce.inOut',
        })
    })

    useEffect(() => {
        // Entrance animation - slide in from right
        if (imageContainerRef.current) {
            gsap.fromTo(imageContainerRef.current,
                { x: 1000, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out"
                }
            );
        }

        if (!containerRef.current) return;
    }, []);

    // State for tooltips
    const [showGithubTooltip, setShowGithubTooltip] = useState(false);
    const [showContactTooltip, setShowContactTooltip] = useState(false);
    const [showResumeTooltip, setShowResumeTooltip] = useState(false);

    return (
        <div id="home" className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-6 pt-24 min-h-screen bg-darker pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            
            <div id='first-paragraph' className="md:col-span-3 md:row-span-2 text-3xl sm:text-4xl font-cursive text-cream text-shadow-lg shadow-forest shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-center gap-6 md:gap-10">
                <SplittingText text="Hi there!, it seems like you are looking for a developer. Just explore my small world" />
                <SplittingText text="I'm Dr/Mahmoud Eltohamy Full-Stack Web & Mobile Developer" className='text-[#eeebe5]'/>
            </div>

            <div className="stat-card bg-card-one md:col-span-1 md:row-span-2 md:col-start-1 md:row-start-3 text-shadow-lg shadow-darker shadow-2xl rounded-3xl flex items-center justify-center p-6 md:p-3">
                <h1 className='text-lg sm:text-xl text-center font-extrabold font-cursive pb-3'>
                    <span className='text-6xl sm:text-7xl lg:text-8xl font-extrabold font-sans text-rust'>+3</span> <br/> <br/>
                    years of Learning and Exp in <br/>Web Development
                </h1>
            </div>
            
            <div className="stat-card bg-card-large md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-3 text-shadow-lg shadow-darker shadow-2xl rounded-3xl flex items-center justify-center p-6 md:p-3">
                <h1 className='text-lg sm:text-xl text-center font-bold font-cursive pb-6'>
                    <span className='text-6xl sm:text-7xl lg:text-8xl font-extrabold font-sans text-rust'>+30</span> <br/> <br/>
                    Projects worked on
                </h1>
            </div>
            
            <div className="stat-card bg-card-three md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-3 text-shadow-lg shadow-darker shadow-2xl rounded-3xl flex items-center justify-center p-6 md:p-3">
                <h1 className='text-lg sm:text-xl text-center font-bold font-cursive '>
                    <span className='text-6xl sm:text-7xl lg:text-8xl font-extrabold font-sans text-rust'>+1</span> <br/> <br/>
                    years of Learning and Exp in <br/>Mobile Development
                </h1>
            </div>

            <div id='second-paragraph' className="md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-5 space-y-8 sm:space-y-14 text-2xl sm:text-3xl font-cursive text-cream text-shadow-lg shadow-forest shadow-xl rounded-3xl pt-10 sm:pt-14 pb-8 px-6 sm:px-8 flex flex-col justify-center gap-2">
                <SplittingText text="Are you ready to Transform Your Ideas into Reality" className='text-[#eeebe5]'/>
                <SplittingText text="⏳ Let's take a look into my small passionate hopes" />
            </div>

            <div className="md:col-span-3 md:row-span-5 md:col-start-4 md:row-start-1 shadow-forest shadow-xl rounded-2xl flex items-center justify-center overflow-hidden h-[400px] sm:h-[500px] md:h-full w-full order-first md:order-none relative">
                <div
                    ref={imageContainerRef}
                    className="w-full h-full perspective-1000"
                >
                    <div
                        ref={containerRef}
                        id='profile-picture'
                        className='image-container h-full w-full flex items-center justify-center relative'
                    >
                        <div
                            ref={frontImageRef}
                            className="flip-image front-image absolute w-full h-full backface-hidden transform-style-3d"
                        >
                            <Image
                                src={frontImage}
                                alt='Profile Picture'
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            ref={backImageRef}
                            className="flip-image back-image absolute w-full h-full backface-hidden transform-style-3d"
                        >
                            <Image
                                src={backImage}
                                alt='Profile Picture'
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="md:col-span-3 md:row-span-1 md:col-start-4 md:row-start-6 flex flex-row items-center justify-center gap-6 sm:gap-10">
                <div className="relative drop-shadow-lg shadow-xl shadow-forest rounded-3xl flex items-center justify-center p-4">
                    <Link href='https://github.com/motohamy1' target="_blank" rel="noopener noreferrer">
                        <GithubIcon
                            className='text-cream hover:text-wine hover:scale-125 transition-all duration-300 ease-in-out'
                            size={50}
                            onMouseEnter={() => setShowGithubTooltip(true)}
                            onMouseLeave={() => setShowGithubTooltip(false)}
                        />
                    </Link>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs sm:text-sm text-white bg-gray-900 rounded-lg shadow-lg z-50 whitespace-nowrap transition-opacity duration-200 ease-in-out ${
                        showGithubTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                        GitHub Profile
                    </div>
                </div>
                
                <div className="relative drop-shadow-lg shadow-xl shadow-forest rounded-3xl flex items-center justify-center p-4">
                    <Link href='#contact'>
                        <Contact
                            size={50}
                            className='text-cream hover:text-wine hover:scale-125 transition-all duration-300 ease-in-out'
                            onMouseEnter={() => setShowContactTooltip(true)}
                            onMouseLeave={() => setShowContactTooltip(false)}
                        />
                    </Link>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs sm:text-sm text-white bg-gray-900 rounded-lg shadow-lg z-50 whitespace-nowrap transition-opacity duration-200 ease-in-out ${
                        showContactTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                        Contact Me
                    </div>
                </div>
                
                <div className="relative drop-shadow-lg shadow-xl shadow-forest rounded-3xl flex items-center justify-center p-4">
                    <Link href='./files/updated_developer_resume.pdf' target="_blank" >
                        <FileText
                            size={50}
                            className='text-cream hover:text-wine hover:scale-125 transition-all duration-300 ease-in-out'
                            onMouseEnter={() => setShowResumeTooltip(true)}
                            onMouseLeave={() => setShowResumeTooltip(false)}
                        />
                    </Link>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs sm:text-sm text-white bg-gray-900 rounded-lg shadow-lg z-50 whitespace-nowrap transition-opacity duration-200 ease-in-out ${
                        showResumeTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                        Resume
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection