import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styles from "./over-mij.module.scss"
import CImage from "../components/CImage"

const AboutPage = ({ data, location }) => {
  const { html, frontmatter } = data.markdownRemark

  const Text = () => {
    return (
      <section className={styles.biography}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    )
  }
  return (
    <Layout
      location={location}
      top={
        <div className={styles.title}>
          <h1>{frontmatter.title}</h1>
        </div>
      }
      right={<Text />}
      left={
        <CImage
          cloudName="mariette"
          photoId={frontmatter.image}
          className={styles.image}
          crop="fill"
          aspectRatio="1"
        />
      }
    >
      <SEO title="Over Mij" />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { key: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
