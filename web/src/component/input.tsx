import React from "react"

interface IInputRootProps extends React.ComponentProps<"div"> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: IInputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface IInputIconProps extends React.ComponentProps<"span"> {}

export function InputIcon({ ...props }: IInputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-dangers"
      {...props}
    />
  )
}

interface IInputFieldsProps extends React.ComponentProps<"input"> {}

export function InputField({ ...props }: IInputFieldsProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
