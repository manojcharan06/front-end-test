import React from 'react'

const Button = ({ className, children }) => {
  return (
<button className={`px-7 py-2 text-xl font-medium tracking-wider text-shadow-white border-white border-2 rounded-xl ${className}`}>{children}</button>
  )
}

export default Button