import React from "react"

interface IButtonProps {
  children: React.ReactNode
}

export function Button({ children }: IButtonProps) {
  return (
    <button className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300">
      {children}
    </button>
  )
}
