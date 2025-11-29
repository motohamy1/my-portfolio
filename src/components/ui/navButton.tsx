import React from 'react'

interface NavButtonProps {
  name: string
  className?: string
}

const NavButton = ({ name, className = '' }: NavButtonProps) => {
  return (
    <div className={`font-cursive text-2xl px-4 py-2 rounded-md transition-colors duration-200 text-[#fbf7ba] hover:transition-transform hover:duration-200 hover:scale-110 hover:cursor-pointer ${className}`}>
      {name}
    </div>
  )
}

export default NavButton
