import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      recentPostsData: allMdx(
        limit: 3
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM D, YYYY")
          }
          id
          excerpt(pruneLength: 400)
        }
      }
    }
  `)
  return (
    <section className="container px-4 pb-24 mx-auto">
      <h2 className="mb-10 text-4xl font-extrabold leading-tight text-indigo-500">
        Recent Posts
      </h2>
      <div className="flex flex-col space-y-12 divide-y divide-gray-200">
        {data.recentPostsData.nodes.map(post => (
          <div>
            <p className="pt-12 mb-3 text-sm font-normal text-gray-500">
              {post.frontmatter.date}
            </p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
              <Link
                to={`/blog/${post.frontmatter.slug}`}
                className="text-gray-900 hover:text-purple-700"
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <p class="mb-4 text-base font-normal text-gray-600">
              {post.excerpt}
            </p>
            <Link to={`/blog/${post.frontmatter.slug}`} className="text-indigo-500 underline">
              Keep Reading
            </Link>
          </div>
        ))}
        <Link
          to="/blog"
          className="text-white w-full md:w-1/4 text-center mx-auto font-semibold px-6 py-3 text-base border rounded border-transparent leading-snug bg-indigo-500"
        >
          All Posts
        </Link>
      </div>
    </section>
  )
}

export default RecentPosts
