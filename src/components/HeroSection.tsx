import React from 'react'
import HeroCard from './ui/HeroCard'
import Folder from './ui/Folder'

const HeroSection = () => {
  return (
    <section id="home" className='flex flex-col md:flex-row min-h-screen py-20 gap-2 bg-[#0f2028]'>
        {/* {the left section} */}
      <div className='flex-1 ml-4 pt-15 flex flex-col gap-10'>
        <div className='flex flex-col justify-between items-start'>
          <h1 className='text-6xl font-bold font-cursive italic mb- text-[#EFFBBB]'>
            Hello,It seems You just enter my small world😊 <br />
            <br/>I'm <span className='font-bold text-[#9db5b7]'>Mahmoud Eltohamy</span>
            <br/>Full-Stack Web & Mobile Developer <br />
            <br/>Are you ready to Transform Your Ideas into Reality ??
          </h1>
        <div className='flex flex-col justify-between items-start pt-15'>
          <p className='text-3xl font-cursive text-white/60'>
            ⏳ Let's take a look into my small passionate hopes
          </p>
        </div>
        </div>
        
        {/* Folders */}
        
      </div>

      {/* {the right section} */}
      <div className='flex-1 relative'>
        <HeroCard />
      </div>
    </section>
  )
}

export default HeroSection