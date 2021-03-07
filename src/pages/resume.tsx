// If you don't want to use TypeScript you can delete this file!
import React from "react"
// import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../content/Kyle-Richardson-Resume.pdf"

const Resume = () => (
  <Layout>
    <SEO title="Kyle Richardson Resume" />
    {/* <!-- component --> */}
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
            <h3 className="font-semibold text-lg mb-1">Botany.io</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
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
            <p className="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
        </div>
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1">TireBuyer</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
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
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
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
            <p className="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resume
