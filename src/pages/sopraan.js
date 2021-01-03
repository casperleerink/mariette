import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import styles from './sopraan.module.scss'

function Sopraan({data}) {
    const sopraanData = data.sopraan.nodes;
    return (
        <Layout>
            <SEO title="Sopraan" />
            <div className={styles.content}>
                {sopraanData.map(item => {
                    return (
                        <div key={item.frontmatter.title}>
                            <h1>{item.frontmatter.title}</h1>
                            <div dangerouslySetInnerHTML={{__html: item.html}}/>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Sopraan

export const sopraanPageQuery = graphql`
  query SopraanPage {
    sopraan: allMarkdownRemark(filter: {frontmatter: {key: {eq: "sopraan"}}}, sort: {order: DESC, fields: frontmatter___title}) {
        nodes {
          frontmatter {
            title
          }
          html
        }
    }
  }
`