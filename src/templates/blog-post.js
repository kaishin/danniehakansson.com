import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const {
    mdx: { excerpt, frontmatter, body },
  } = data

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} />
      <div className="max-w-4xl mx-auto py-8 md:py-16">
        <h1 className="h1 text-indigo-500">{frontmatter.title}</h1>
        <p>{frontmatter.created}</p>
        <article className="mt-8">
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        created(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
