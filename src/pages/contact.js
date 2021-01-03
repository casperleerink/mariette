import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './contact.module.scss'
import {graphql} from 'gatsby'
const ContactPage = ({data}) => {
    const {html, frontmatter} = data.markdownRemark;
    return (
        <Layout right={
            <div className={styles.content}>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{__html: html}}/>
            </div>
        } contact={true}>
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
      }
    }
  }
`