// Gatsby supports TypeScript natively!
import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({data}) => (
  <Layout>
    <SEO title="About Me" />
    <section className="container px-4 py-24 mx-auto">
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-2 md:order-none">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
            Clear overview for efficient tracking
          </h2>
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Handle your subscriptions and transactions efficiently with the
            clear overview in Dashboard. Features like the smart search option
            allow you to quickly find any data you’re looking for.
          </p>
          <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
            Learn More
          </a>
        </div>
        <div className="w-full">
          <StaticImage src="../images/main-about.jpg" alt="Picture of my family" placeholder="blurred" />
        </div>
      </div>
    </section>
  </Layout>
)

export default About
