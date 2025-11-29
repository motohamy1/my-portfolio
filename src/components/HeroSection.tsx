import React from 'react'
import Folder from './ui/Folder'
import Image from "next/image";

const HeroSection = () => {

    const imageSrc = '/images/personal.png';

  return (

      <div className="grid grid-cols-6 grid-rows-6 gap-4 pt-30 min-h-screen pb-2 px-4">
          <div className="col-span-3 row-span-2 border-2">1</div>

          <div className="row-span-2 col-start-1 row-start-3 border-2">
              <Folder />
          </div>
          <div className="row-span-2 col-start-2 row-start-3 border-2">
              <Folder />
          </div>
          <div className="row-span-2 col-start-3 row-start-3 border-2">
              <Folder />
          </div>

          <div className="col-span-3 row-span-2 col-start-1 row-start-5 border-2">5</div>

          <div className="col-span-3 row-span-5 col-start-4 row-start-1 border-2 shadow-2xl flex items-center justify-center">
              <Image src={imageSrc}
                     alt='Profile Picture'
                     width={500} height={500}
                     className='h-full w-auto object-contain'
              />
          </div>
          <div className="col-start-4 row-start-6 border-2">7</div>
          <div className="col-start-5 row-start-6 border-2">8</div>
          <div className="col-start-6 row-start-6 border-2">9</div>
      </div>

  )
}

export default HeroSection