import { useState } from "react"

const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <div className="flex justify-center items-center fixed bottom-5 h-10 w-full ">
      <p className="text-gray-500">Copyright Rohit - {year} </p>
    </div>
  )
}

export default Footer
