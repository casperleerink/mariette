import React, {useState} from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import styles from './on-stage-now.module.scss'
import CImage from '../components/CImage'

function OnStagePage({data}) {
    const {frontmatter, html} = data.markdownRemark;
    const [showTarief, setShowTarief] = useState(false);
    return (
        <Layout left={
            <CImage cloudName="mariette" 
                photoId={frontmatter.image}
                className={styles.image}
                crop="fill"
            />}
            top={
                <div className={styles.title}>
                    <h1>On Stage Now!</h1>
                </div>
            }
            right={
                <>
                    <div dangerouslySetInnerHTML={{__html: html}} className={styles.content}/>
                    <div className={styles.tarieven}>
                        <button onClick={() => setShowTarief(!showTarief)}>Tarieven</button>
                        <ul style={{
                            height: showTarief ? "auto" : "0",
                            overflowY: "hidden",
                        }}>
                            {frontmatter.tarieven.map(tarief => {
                                return (
                                    <li>{tarief}</li>
                                )
                            })}
                        </ul>
                    </div>
                </>
            }
        >
            <SEO title="On Stage Now" />
        </Layout>
    )
}

export default OnStagePage;

export const onStageNowPageQuery = graphql`
  query OnStageNowPage {
    markdownRemark(frontmatter: {key: {eq: "on-stage-now"}}) {
      html
      frontmatter {
        image
        tarieven
      }
    }
  }
`