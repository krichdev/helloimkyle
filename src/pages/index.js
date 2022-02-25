import React from "react"

import Layout from "../components/layout"
import SeoWrap from "../components/seo"
import Intro from "../components/intro"
import Projects from "../components/projects"
import Tech from "../components/tech"
import Certs from "../components/certs"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SeoWrap title="Home" />
    <Intro />
    <Certs />
    <Projects />
    <Tech />
    <Contact/>
  </Layout>
)

export default IndexPage
