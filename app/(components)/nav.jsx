'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      // Prevent scrolling on the body when the menu is open
      const originalStyle = window.getComputedStyle(document.body).overflow;  
      document.body.style.overflow = isOpen ? 'hidden' : originalStyle;
      
      // Cleanup function to reset overflow style
      return () => document.body.style.overflow = originalStyle;
  }, [isOpen]); // Only re-run the effect if isOpen changes
  return (
    <nav id="top" className="opacity-75">
      <div className="flex justify-between items-center bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 p-4">
        <div className="text-white font-bold text-xl">Pandario</div>

        <div className="hidden lg:flex space-x-4 z-20">

          <Link href="#top" className="text-white z-20 hover:text-indigo-700">Main</Link>
          <Link href="#top"  className="text-white z-20 hover:text-indigo-700">My path</Link>
          <Link href="#top" className="text-white z-20 hover:text-indigo-700">My yoga</Link>
          <Link href="#top" className="text-white z-20 hover:text-indigo-700">Contact us</Link>
        </div>

        <div className="lg:hidden">

            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col space-y-2">
                <span 
                  className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}>

                </span>
                <span 
                  className={`block h-0.5 w-8 bg-white transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}>

                </span>
                <span 
                  className={`block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}>
                </span>
            </button>
        </div>
        {isOpen && (
                <div className="z-20 absolute top-10 left-0 right-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 p-4 flex flex-col items-start lg:hidden h-screen">
                  
                  <Link href="#top" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-700 pb-3">Main</Link>
                  <Link href="#top" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-700 pb-3">My path</Link>
                  <Link href="#top" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-700 pb-3">My yoga</Link>
                  <Link href="#top" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-700 pb-3">Contact us</Link>

                  
                  <div className="border-t-2 border-white my-4 w-full"></div>
                  <div className="flex items-center space-x-3">
                      <a href="https://github.com/Pandario">
                        <FaGithub className="text-white hover:text-indigo-700" />
                      </a>
                      <Link href="https://github.com/Pandario" target="_blank" className="text-white hover:text-indigo-700">GitHub</Link>
                    </div>

                    <div className="flex items-center space-x-3">
                      <a href="https://www.linkedin.com/in/andrey-chernov-549700242/">
                          <FaLinkedin className="text-white hover:text-indigo-700"/>
                      </a>
                      <Link href="https://www.linkedin.com/in/andrey-chernov-549700242/" target="_blank" className="text-white hover:text-indigo-700">LinkedIn</Link>
                    </div>
                    <div className="mt-4 text-center text-white">
                      © 2024 Pandario
                    </div>
                </div>
            )}
  </div>
  </nav>
  )
}

export default Nav 