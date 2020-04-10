import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const items = [
  {
    href: "http://yatzy.danniehakansson.com",
    title: "Yatzy online",
    description: "The classic game, built for the web with online capabilities",
  }
]

const ProjectPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="h1 text-indigo-500">My projects</h1>
            <div className="flex flex-col mt-8">
            {items.map(({ href, title, description }) => (
                <a href={href} className="group border-l transition transition-colors duration-200 linear hover:border-indigo-500 hover:border-l-2 hover:rounded">
                  <div className="p-4">
                    <h3 className="h3">{title}</h3>
                    <p className="text-gray-500">{description}</p>
                  </div>
                </a>
              ))}
              {/* {items.map(({ href, title, description }) => (
                <a href={href} className="project-item group">
                  <div className="py-4 animation-target">
                    <h3 className="h3">{title}</h3>
                    <p className="text-gray-500 group-hover:text-white">{description}</p>
                  </div>
                </a>
              ))} */}
              <div className="mt-8"><em>...more to come</em></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectPage
