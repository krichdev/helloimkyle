// Gatsby supports TypeScript natively!
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SeoWrap from "../components/seo"

const About = ({ data }) => (
  <Layout>
    <SeoWrap title="About Me" />
    <section className="container px-4 py-12 mx-auto">
      <p className="mb-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
        About Kyle Richardson
      </p>
      <div className="grid items-center  grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-2 md:order-none">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-black md:leading-tight sm:text-left md:text-4xl">
            An always learning, career changing, front end developer.
          </h2>
          <p className="mb-5 text-base text-gray-600 sm:text-left md:text-lg">
            After high school, my goal was to take over the family's direct mail
            marketing business. I spent 8 years there full time, wearing many
            different hats. In the beginning, I mostly worked in production, or
            making devlieries. As time went on, I transitioned into a more sales and
            customer management role.
          </p>
          <p className="mb-5 text-base text-gray-600 sm:text-left md:text-lg">
            During this time I also started working on revamping our website. This
            was my first introduction to HTML and CSS while working in a Wordpress
            instance. I noticed quickly that my days where I would focus on this work
            went by really fast. I tried the self taught courses, but always would loose
            momentum.
          </p>
          <p className="mb-5 text-base text-gray-600 sm:text-left md:text-lg">
            I started researching coding bootcamps, to fix the loosing momentum issue I was
            facing. In early 2017, I decided to leave the family business and go to General
            Assembly's 3 month immersive bootcamp, focusing on front end development. The rest
            is history.
          </p>
        </div>
        <div className="w-full">
          <StaticImage
            src="../images/WebsiteHeadShot.png"
            alt="Picture of my family"
            placeholder="blurred"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default About
