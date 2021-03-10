import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMdx(
        limit: 6
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        nodes {
          frontmatter {
            place
            slug
            role
            project
            tech
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          id
        }
      }
    }
  `)
  return (
    <section className="container px-4 pb-16 mx-auto">
      <h2 className="mb-16 text-4xl font-extrabold leading-tight text-indigo-500">
        Stuff I've Worked On
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.projects.nodes.map(project => {
          const image = getImage(project.frontmatter.img)
          return (
            <div>
              <GatsbyImage
                image={image}
                loading="eager"
                objectFit="contain"
                alt={`${project.frontmatter.role} at ${project.frontmatter.place}`}
                className="object-cover w-full h-56 mb-5 bg-center rounded"
              />
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                {project.frontmatter.project} at {project.frontmatter.place}
              </h2>
              <div className="flex mb-6 space-x-2">
                {project.frontmatter.tech.map(val => (
                  <span className="text-white bg-gray-900 rounded-md px-1 lg:px-4">
                    {val}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
