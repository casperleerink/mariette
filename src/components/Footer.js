import React from "react"
import styles from "./Footer.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"
import Form from "./Form"

function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contact: markdownRemark(frontmatter: { key: { eq: "contact" } }) {
        html
        frontmatter {
          title
        }
      }
      nieuws: allMarkdownRemark(
        filter: { frontmatter: { key: { eq: "nieuws" } } }
      ) {
        nodes {
          frontmatter {
            date
            title
          }
        }
      }
    }
  `)
  const { contact, nieuws } = data

  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h1>{contact.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contact.html }} />
        <Form />
      </div>
      <div className={styles.nieuws}>
        {nieuws.nodes.length > 0 && <h1>Nieuws/Agenda</h1>}
        {nieuws.nodes.map(item => (
          <p key={item.frontmatter.title}>
            <span>
              {moment(item.frontmatter.date)
                .local()
                .format("DD-MM-YYYY")}
            </span>{" "}
            <span>{item.frontmatter.title}</span>
          </p>
        ))}
      </div>
    </footer>
  )
}

export default Footer
