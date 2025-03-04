import React from "react"

interface IIconButtonProps extends React.ComponentProps<"button"> {}

export function IconButton({ ...props }: IIconButtonProps) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}
