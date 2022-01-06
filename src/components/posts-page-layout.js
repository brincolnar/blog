import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Navigation from './navigation'
import Footer from './footer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { heroImage } from"./posts-page-layout.module.css"
import Container from "./container"
import Topic from "./topic"


export default function PageTemplate({ data: { mdx } }) {

  const image = getImage(mdx.frontmatter.hero_image.large);

  return (
    <div className="site">
      <div className="site-content">
        <Navigation />
        <Container>
          <h1>{mdx.frontmatter.title}</h1>
          <p style={{ marginBottom: "20px" }}>Posted on: {mdx.frontmatter.date}</p>
          <p className="topic-p" style={{ marginBottom: "20px" }}>Topics: {mdx.frontmatter.topics.split(',').map(topic => <Topic name={topic} />)} </p>
          <GatsbyImage className={heroImage} image={image} alt="Image" />
          <MDXProvider>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        hero_image {
          large: childImageSharp {
            gatsbyImageData(height: 400, width: 800)
          }
        }
        date(formatString: "DD MMMM YYYY")
        topics
      }
    }
  }
`