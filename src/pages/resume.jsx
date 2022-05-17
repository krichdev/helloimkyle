import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../files/resume.pdf"

const Resume = () => (
  <Layout>
    <SEO title="Kyle Richardson Resume" />
    <div className="container mx-auto">
      <section className="w-full mb-6">
        <div className="w-full px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">
            My Working Timeline
          </h2>
          <div className="mb-0 space-x-0 md:space-x-2">
          <a href={resume} className="text-white font-semibold px-6 py-3 text-base boorder rounded border-transparent leading-snug bg-indigo-900">Download Resume</a>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1"><a href="https://nba.com" target="_blank">NBA</a></h3>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">March 2022 - Present</p>
            <p className="leading-tight text-justify">
              Front end engineer working on custom headless Wordpress features for team site editors, using React and Typescript.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow" />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow" />
          </div>
          <div className="bg-indigo-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1"><a href="https://alkymi.io" target="_blank">Alkymi.io</a></h3>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">March 2021 - March 2022</p>
            <p className="leading-tight text-justify">
              Frontend engineer building out ui using react, typescript, and css modules.
            </p>
          </div>
        </div>
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1"><a href="https://botany.io" target="_blank">Botany.io</a></h3>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">July 2019 - March 2021</p>
            <p className="leading-tight text-justify">
              Founding member of a SaaS platform that helps developers grow in their career. Built web app using Next.js,
              Graphql, and styled-components.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow" />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow" />
          </div>
          <div className="bg-indigo-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">Howard Schultz</h3>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">May 2019 - July 2019</p>
            <p className="leading-tight text-justify">
              Worked on presidential campaign for Howard Schultz. Used Next.js to build custom canvassing app, and Gatsby.js to build
              campaign website.
            </p>
          </div>
        </div>
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">TireBuyer</h3>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">May 2017 - May 2019</p>
            <p className="leading-tight text-justify">
              My first technical role, working on an ecommerce platform selling tires. Utilized HTML/CSS/ and modern javascript.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow" />
          </div>
        </div>
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">General Assembly</h3>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">January 2017 - April 2017</p>
            <p className="leading-tight text-justify">
              A 12 week immersive coding bootcamp. Learned HTML/CSS/Javascript and the M.E.A.N stack.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow" />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow" />
          </div>
          <div className="bg-indigo-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">
              Seattle Mailing Bureau
            </h3>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">June 2009 - January 2017</p>
            <p className="leading-tight text-justify">
              Worked for my family's direct mail marketing business. I wore a lot of hats here, from cleaning the bathrooms, to sales and marketing,
              to production.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resume
