import React from "react"

import Layout from "../components/layout"
import SeoWrap from "../components/seo"
import Intro from "../components/intro"
import Projects from "../components/projects"
import Tech from "../components/tech"
import RecentPosts from "../components/recentPosts"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SeoWrap title="Home" />
    <Intro />
    <Projects />
    <Tech />
    <Contact/>
  </Layout>
)

export default IndexPage
