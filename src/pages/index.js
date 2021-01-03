import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'
import styles from "./index.module.scss"
import CImage from "../components/CImage"

const Index = ({data}) => {
  const {html, frontmatter} = data.markdownRemark;
  const Cta = () => {
    return (
      <div className={styles.cta}>
        <h1>Welkom!</h1>
        <Link to="/coaching"><button className={styles.primaryBtn}>Bekijk les mogelijkheden</button></Link>
        <Link to="/on-stage-now"><button className={styles.secondaryBtn}>Proefles On Stage Now!</button></Link>
      </div>
    )
  }
  return (
  <Layout 
    top={<Cta />} 
    right={<div className={styles.text} dangerouslySetInnerHTML={{ __html: html }} />}
    left={<CImage 
      cloudName="mariette" 
      photoId={frontmatter.image}
      className={styles.left}
      crop="fill"
      aspectRatio="1"
    />}
  >
    <SEO title="Welkom" />
  </Layout>
  )
}

export default Index


export const indexPageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: {key: {eq: "index-page"}}) {
      html
      frontmatter {
        image
      }
    }
  }
`