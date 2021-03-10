// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {AiOutlineRight} from 'react-icons/ai'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data: { allMdx } }) => {
  console.log(allMdx)
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="container px-4 py-24 mx-auto">
        <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">
          All Posts
        </h2>
        <div className="w-full xl:w-4/6">
          <div className="flex flex-col space-y-16">
            {allMdx.nodes.map(post => {
              const image = getImage(post.frontmatter.img)
              return (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <GatsbyImage image={image} alt={post.frontmatter.title} className="h-40" />
                <div className="col-span-1 md:col-span-3">
                  <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                    {post.frontmatter.date}
                  </p>
                  <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                    <a className="text-gray-900 hover:text-purple-700">
                      {post.frontmatter.title}
                    </a>
                  </h2>
                  <p className="mb-3 text-sm font-normal text-gray-500">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.frontmatter.slug}`} className="text-indigo-500 flex items-center">Keep Reading <AiOutlineRight /></Link>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
          img {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        id
        excerpt(pruneLength: 400)
      }
    }
  }
`


