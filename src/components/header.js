import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../images/kr-logo-dark.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="z-30 w-full px-2 pb-3 pt-8 bg-white sm:px-">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" title="Hello I'm Kyle" className="flex items-center">
          <img src={logo} className="h-14" alt="Hello I'm Kyle logo" />
          <span className="sr-only">Hello I'm Kyle</span>
        </Link>
        <div className="flex items-center space-x-1">
          <div className="hidden space-x-12 md:inline-flex">
            <Link to="/about" className="py-3">About Me</Link>
            <Link to="/resume" className="text-white font-semibold px-6 py-3 text-base border rounded border-transparent leading-snug bg-indigo-500">Resume</Link>
          </div>
          <div className="inline-flex md:hidden">
            <button
              className="flex-none px-2 btn btn-link btn-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
            <div
              className={`${
                !isOpen && "hidden"
              } absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow-lg border border-gray-200`}
            >
              <button
                className="self-end flex-none px-2 ml-2 btn btn-link btn-icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span className="sr-only">Close Menu</span>
              </button>
              <Link to="/about">About Me</Link>
              <Link to="/resume" className="text-white font-semibold px-6 py-3 text-base border rounded border-transparent leading-snug bg-indigo-500">Resume</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
