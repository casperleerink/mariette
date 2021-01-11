import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import styles from './sopraan.module.scss'

function Sopraan({data}) {
  const {solo, muziektheater} = data;
    return (
        <Layout top={
            <div className={styles.title}>
              <h1>Sopraan</h1>
            </div>
          }
          right={
            <div className={styles.right}>
              <h1>{solo.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{__html: solo.html}}/>
            </div>
          }
          left={
            <div className={styles.left}>
              <h1>{muziektheater.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{__html: muziektheater.html}}/>
            </div>
          }
        >
            <SEO title="Sopraan" />
            <div className={styles.content}>
                {/* {nodes.map(item => {
                    return (
                        <div key={item.frontmatter.title}>
                            <h1>{item.frontmatter.title}</h1>
                            <div dangerouslySetInnerHTML={{__html: item.html}}/>
                        </div>
                    )
                })} */}
            </div>
        </Layout>
    )
}

export default Sopraan

export const sopraanPageQuery = graphql`
  query SopraanPage {
    solo: markdownRemark(frontmatter: {key: {eq: "solo"}}) {
      frontmatter {
        title
      }
      html
    }
    muziektheater: markdownRemark(frontmatter: {key: {eq: "muziektheater"}}) {
      frontmatter {
        title
      }
      html
    }
  }
`