import React from "react"
import { SiLinkedin, SiGithub } from "react-icons/si"

const Intro = () => (
  <section className="container px-4 py-16 mx-auto">
    <div className="w-full md:w-8/12">
      <h1 className="mb-8 text-5xl font-bold text-gray-900 md:text-6xl">
        Hello, I'm Kyle. <br />
        I'm a <span className="text-indigo-500">front end engineer</span>.
      </h1>
      <p className="mb-3 text-base text-gray-500 md:text-2xl">
        Utilizing modern JavaScript to build responsive web apps and features to
        boost business growth and improve UX.
      </p>
      <p className="mb-5 text-base text-gray-500 md:text-2xl">
        Most recently I was a founding member of a SaaS app to help developers
        grow in their career.
      </p>
      <div className="flex flex-row justify-start">
        <a href="https://www.linkedin.com/in/kyle-richardson" target="__blank">
          <SiLinkedin size="2rem" />
        </a>
        <a href="https://www.linkedin.com/in/kyle-richardson" target="__blank" className="mx-4">
          <SiGithub size="2rem" />
        </a>
      </div>
    </div>
  </section>
)

export default Intro
