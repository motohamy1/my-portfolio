'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Contact, GithubIcon, FileText } from "lucide-react";
import Link from "next/link";
import SplitText from "./SplitText";
import TextPressure from './TextPressure';
import {SplittingText} from "@/components/animate-ui/primitives/texts/splitting";

gsap.registerPlugin(ScrollTrigger);



const HeroSection = () => {
    const frontImage = '/images/personal.png';
    const backImage = '/images/cartoon.png';
    const containerRef = useRef<HTMLDivElement>(null);
    const frontImageRef = useRef<HTMLDivElement>(null);
    const backImageRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to("#card", {
            backgroundColor: "#EFFBBB",
            duration: 4,
            delay: 0.5,
            stagger:0.2,
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

        let flipped = false;

        const handleMouseEnter = () => {
            if (!flipped && frontImageRef.current && backImageRef.current) {
                gsap.to(frontImageRef.current, {
                    rotationY: -180,
                    duration: 0.6,
                    ease: "power2.inOut"
                });

                gsap.to(backImageRef.current, {
                    rotationY: 0,
                    duration: 0.6,
                    ease: "power2.inOut"
                });
                flipped = true;
            }
        };

        const handleMouseLeave = () => {
            if (flipped && frontImageRef.current && backImageRef.current) {
                gsap.to(frontImageRef.current, {
                    rotationY: 0,
                    duration: 0.6,
                    ease: "power2.inOut"
                });

                gsap.to(backImageRef.current, {
                    rotationY: 180,
                    duration: 0.6,
                    ease: "power2.inOut"
                });
                flipped = false;
            }
        };

        const container = containerRef.current;
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        // Initial setup
        if (backImageRef.current) {
            gsap.set(backImageRef.current, { rotationY: 180 });
        }

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // State for tooltips
    const [showGithubTooltip, setShowGithubTooltip] = useState(false);
    const [showContactTooltip, setShowContactTooltip] = useState(false);
    const [showResumeTooltip, setShowResumeTooltip] = useState(false);



    return (
        <div id="home" className="grid grid-cols-6 grid-rows-6 gap-4 pt-30 min-h-screen bg-darker pb-2 px-4">
            <div id='first-paragraph' className="text-4xl font-cursive text-cream col-span-3 row-span-2 text-shadow-lg shadow-forest shadow-xl rounded-3xl p-6 flex flex-col gap-10">
                <SplittingText text="Hi there!, it seems like you are looking for a developer. Just explore my small world" />
                <SplittingText text="I'm Dr/Mahmoud Eltohamy Full-Stack Web & Mobile Developer" className='text-[#eeebe5]'/>
            </div>

            <div id='card' className="row-span-2 col-start-1 row-start-3 bg-card-one text-shadow-lg shadow-darker shadow-2xl rounded-3xl  flex items-center justify-center">
                <h1 className='text-lg text-center font-extrabold font-cursive pb-3'>
                    <span className='text-8xl font-extrabold font-sans text-rust'>+3</span> <br/> <br/>
                    years of Learning and Exp in <br/>Web Development
                </h1>
            </div>
            <div id='card'  className="row-span-2 col-start-2 row-start-3 bg-card-large text-shadow-lg shadow-darker shadow-2xl rounded-3xl  flex items-center justify-center">
                <h1 className='text-lg text-center font-bold font-cursive pb-6'>
                    <span className='text-8xl font-extrabold font-sans text-rust'>+30</span> <br/> <br/>
                    Projects worked on
                </h1>
            </div>
            <div id='card'  className="row-span-2 col-start-3 row-start-3 bg-card-three text-shadow-lg shadow-darker shadow-2xl rounded-3xl  flex items-center justify-center">
                <h1 className='text-lg text-center font-bold font-cursive '>
                    <span className='text-8xl font-extrabold font-sans text-rust'>+1</span> <br/> <br/>
                    years of Learning and Exp in <br/>Mobile Development
                </h1>
            </div>

            <div id='second-paragraph' className="space-y-14 col-span-3 row-span-2 col-start-1 row-start-5 text-3xl font-cursive text-cream  text-shadow-lg shadow-forest shadow-xl rounded-3xl pt-17 pb-8 px-8 flex flex-col gap-1">
                <SplittingText text="Are you ready to Transform Your Ideas into Reality" className='text-[#eeebe5]'/>
                <SplittingText text="⏳ Let's take a look into my small passionate hopes" />
            </div>

            <div className="col-span-3 row-span-5 col-start-4 row-start-1 shadow-forest shadow-xl rounded-2xl flex items-center justify-center overflow-hidden">
                <div
                    ref={imageContainerRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        perspective: '1000px'
                    }}
                >
                    <div
                        ref={containerRef}
                        id='profile-picture'
                        className='image-container h-full w-full flex items-center justify-center'
                        style={{
                            width: '100%',
                            height: '100%',
                            perspective: '1000px'
                        }}
                    >
                        <div
                            ref={frontImageRef}
                            className="flip-image front-image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                transformStyle: 'preserve-3d'
                            }}
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
                            className="flip-image back-image"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backfaceVisibility: 'hidden',
                                transformStyle: 'preserve-3d'
                            }}
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
            <div className="col-start-4 row-start-6 drop-shadow-lg text-shadow-lg shadow-forest shadow-xl rounded-3xl flex items-center justify-center relative">
                <div className="relative">
                    <Link href='https://github.com/motohamy1' target="_blank" rel="noopener noreferrer">
                        <GithubIcon
                            className='text-cream hover:text-wine hover:scale-125 transition-all duration-300 ease-in-out'
                            size={60}
                            onMouseEnter={() => setShowGithubTooltip(true)}
                            onMouseLeave={() => setShowGithubTooltip(false)}
                        />
                    </Link>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg z-50 whitespace-nowrap transition-opacity duration-200 ease-in-out ${
                        showGithubTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                        GitHub Profile
                    </div>
                </div>
            </div>
            <div className="col-start-5 row-start-6 drop-shadow-lg shadow-xl text-shadow-xl shadow-forest rounded-3xl flex items-center justify-center relative">
                <div className="relative">
                    <Link href='#contact'>
                        <Contact
                            size={60}
                            className='text-cream hover:text-wine hover:scale-125 transition-all duration-300 ease-in-out'
                            onMouseEnter={() => setShowContactTooltip(true)}
                            onMouseLeave={() => setShowContactTooltip(false)}
                        />
                    </Link>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg z-50 whitespace-nowrap transition-opacity duration-200 ease-in-out ${
                        showContactTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                        Contact Me
                    </div>
                </div>
            </div>
            <div className="col-start-6 row-start-6 drop-shadow-lg shadow-xl text-shadow-xl shadow-forest rounded-3xl flex items-center justify-center relative">
                <div className="relative">
                    <Link href='./files/myTealResume.docx' target="_blank" >
                        <FileText
                            size={60}
                            className='text-cream hover:text-wine hover:scale-125 transition-all duration-300 ease-in-out'
                            onMouseEnter={() => setShowResumeTooltip(true)}
                            onMouseLeave={() => setShowResumeTooltip(false)}
                        />
                    </Link>
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg z-50 whitespace-nowrap transition-opacity duration-200 ease-in-out ${
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