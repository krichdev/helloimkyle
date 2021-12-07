const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const blogResult = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/blog/"}}) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `)

  const projectResult = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/projects/"} }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `)

  if (blogResult.errors) {
    reporter.panicOnBuild(`🚨  ERROR: ${blogResult} query => ${blogResult.errors}`)
  }

  if (projectResult.errors) {
    reporter.panicOnBuild(`🚨  ERROR: ${projectResult} query => ${projectResult.errors}`)
  }

  // Create blog pages.
  const posts = blogResult.data.allMdx.nodes
  // call `createPage` for each result
  posts.map(({ frontmatter, id }) => {
    createPage({
      path: `/blog/${frontmatter.slug}`,
      component: path.resolve(`./src/templates/blog-layout.js`),
      context: { id },
    })
  });
}
