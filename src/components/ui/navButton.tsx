import React from 'react'

interface NavButtonProps {
  name: string
  className?: string
  isActive?: boolean
}

const NavButton = ({ name, className = '', isActive = false }: NavButtonProps) => {
  return (
    <div className={`font-cursive text-2xl px-4 py-2 rounded-full transition-all duration-200 hover:transition-transform hover:scale-110 hover:cursor-pointer ${isActive
      ? 'bg-cream text-darker'
      : 'text-cream'
      } ${className}`}>
      {name}
    </div>
  )
}

export default NavButton
