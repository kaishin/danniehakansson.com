import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  console.log(data)
  const {
    allMdx: { edges: posts },
  } = data

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="h1 text-indigo-500">Blog posts</h1>
          </div>
          <div>
            {posts.map(({ node }) => {
              return (
                <Link
                  to={node.fields.slug}
                  className="block mt-8 group border-l transition transition-colors duration-200 linear hover:border-indigo-500 hover:border-l-2 hover:rounded"
                >
                  <div className="p-4">
                    <h3 className="h3">{node.frontmatter.title}</h3>
                    <small>{node.frontmatter.created}</small>
                    <p
                      className="text-gray-500 mt-2"
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___created], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            created(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
