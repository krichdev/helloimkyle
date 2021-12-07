import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import SeoWrap from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Post({ data: { mdx } }) {
  const image = getImage(mdx.frontmatter.img)
  return (
    <Layout>
      <SeoWrap title={mdx.frontmatter.title} />
      <article
        class="container px-4 py-24 mx-auto"
        itemID="#"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <h1
            className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            itemprop="headline"
            title={mdx.frontmatter.title}
          >
            {mdx.frontmatter.title}
          </h1>
          <GatsbyImage image={image} alt={mdx.frontmatter.title} />
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
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
