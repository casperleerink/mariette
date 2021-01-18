import React, { useState, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styles from "./on-stage-now.module.scss"
import CImage from "../components/CImage"

function OnStagePage({ data }) {
  const information = data.information
  const topics = data.topics.nodes
  const contentRef = useRef(null)
  const [type, setType] = useState(topics[0].frontmatter.title)

  const handleType = t => {
    if (window.innerWidth < 501) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      })
    }
    setType(t)
  }
  const Content = ({ title }) => {
    const node = topics.find(item => {
      return item.frontmatter.title === title
    })
    return (
      <div className={styles.content}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </div>
    )
  }
  return (
    <Layout
      top={
        <div className={styles.title}>
          <h1>On Stage Now!</h1>
        </div>
      }
      right={
        <ul className={styles.ul}>
          {topics.map(node => {
            return (
              <li
                key={node.frontmatter.title}
                onClick={() => handleType(node.frontmatter.title)}
                className={node.frontmatter.title === type ? styles.active : ""}
              >
                <h2>{node.frontmatter.title}</h2>
                <CImage
                  cloudName="mariette"
                  photoId={node.frontmatter.image}
                  className={styles.image}
                  crop="fill"
                  aspectRatio="1"
                />
              </li>
            )
          })}
        </ul>
      }
    >
      <SEO title="On Stage Now" />
      <div ref={contentRef}>{type && <Content title={type} />}</div>
      <div
        dangerouslySetInnerHTML={{ __html: information.html }}
        className={styles.content}
      />
    </Layout>
  )
}

export default OnStagePage

export const onStageNowPageQuery = graphql`
  query OnStageNowPage {
    information: markdownRemark(
      frontmatter: { key: { eq: "on-stage-now-informatie" } }
    ) {
      html
    }
    topics: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "on-stage-now" } } }
    ) {
      nodes {
        frontmatter {
          title
          image
        }
        html
      }
    }
  }
`
