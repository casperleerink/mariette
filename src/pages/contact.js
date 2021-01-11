import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './contact.module.scss'
import {graphql} from 'gatsby'
import CImage from '../components/CImage'
const ContactPage = ({data}) => {
    const {html, frontmatter} = data.markdownRemark;
    return (
        <Layout 
          top={
            <div className={styles.title}>
              <h1>Contact</h1>
            </div>
          }
          left={
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{__html: html}}/>
            </div>
          } 
          right={
            <div className={styles.right}>
              <CImage 
                cloudName="mariette" 
                photoId={frontmatter.image}
                className={styles.image}
                crop="scale"
              />
            </div>
          }
          contact={true}
        >
          <SEO title="Contact"/>
            
        </Layout>
    )
}

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: {key: {eq: "contact"}}) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`