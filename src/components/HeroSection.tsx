'use client';

import Image from "next/image";

const HeroSection = () => {
    return (
        <div id="home" className="bg-black/95 min-h-svh md:min-h-screen pt-24 pb-8 px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="hv1">
                <div>
                    <span className="hv1-status"><span className="hv1-dot" />Available for hire</span>
                    <h1>Mahmoud Eltohamy builds <em>fast, tactile</em> web and mobile apps.</h1>
                    <p className="hv1-sub">Full-stack developer working in React, Next.js, Node.js, and React Native. Demanding ideas in — production interfaces out. This vault holds the proof: services, skills, selected work.</p>
                    <div className="hv1-cta">
                        <a className="hv1-primary" href="#contact">Start a project</a>
                        <a className="hv1-ghost" href="https://github.com/motohamy1" target="_blank" rel="noopener noreferrer">GitHub profile</a>
                        <a className="hv1-ghost" href="/files/updated_developer_resume.pdf" target="_blank" rel="noopener noreferrer">Download résumé</a>
                    </div>
                    <div className="hv1-proof">
                        <div><span>+10 builds live in production</span><small>Every project below is deployed — Vercel and Render, not mockups</small></div>
                        <div><span>React · Next.js · Flutter · React Native</span><small>Web platforms plus cross-platform mobile, one engineer</small></div>
                        <div><span>Design to deploy, solo</span><small>Scoped, built, and shipped to production URLs in weeks</small></div>
                    </div>
                </div>
                <figure className="hv1-fig">

                    <Image src="/images/personal.png" alt="Portrait of Mahmoud Eltohamy" width={900} height={1100} />

                    <figcaption><span>Cairo / Mansoura — working worldwide</span><b>Vault exhibit 001</b></figcaption>
                </figure>
            </div>
        </div>
    )
}

export default HeroSection
