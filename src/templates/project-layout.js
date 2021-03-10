import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Project({ data: { mdx } }) {
  const image = getImage(mdx.frontmatter.img)
  return (
    <Layout>
      <SEO title={`${mdx.frontmatter.role} at ${mdx.frontmatter.place}`} />
      <article
        class="container px-4 py-24 mx-auto"
        itemid="#"
        itemscope
        itemtype="http://schema.org/BlogPosting"
      >
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <h1
            className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            itemprop="headline"
          >
            {mdx.frontmatter.title}
          </h1>
          <GatsbyImage image={image} alt={`${mdx.frontmatter.role} at ${mdx.frontmatter.place}`} />
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        place
        role
        tech
        img {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      body
    }
  }
`
