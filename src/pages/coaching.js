import React, {useState, useRef} from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import styles from './coaching.module.scss'
import CImage from '../components/CImage'
// import CImage from '../components/CImage'

function CoachingPage({data}) {
    const contentRef = useRef(null);
    const [type, setType] = useState("");
    const [showTarief, setShowTarief] = useState(false);
    const coachings = data.coaching.nodes;
    const info = data.informatie;

    const handleType = (t) => {
        if (window.innerWidth < 501) {
            contentRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
            });
        }
        setType(t);
    }
    const Content = ({title}) => {
        const node = coachings.find(item => {
            return item.frontmatter.title === title;
        });
        return (
            <div className={styles.content}>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: node.html}}/>
                {node.frontmatter.tarief && 
                    <div className={styles.tarief}>
                        <button onClick={() => setShowTarief(!showTarief)}>Tarief</button>
                        {showTarief && <p>{node.frontmatter.tarief}</p>}
                    </div>
                }
            </div>
        )
    }
    return (
        <Layout
            top={
                <div className={styles.title}>
                    <h1>Coaching</h1>
                </div>
            }
            right={
                <ul className={styles.ul}>
                    {coachings.map(node => {
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
            <SEO title="Coaching" />
            <div ref={contentRef}>
                {type ? <Content title={type}/> : <div className={styles.content}>Kies een les type.</div>}
            </div>
            <div className={styles.info} dangerouslySetInnerHTML={{__html: info.html}}/>
        </Layout>
    )
}

export default CoachingPage


export const coachingPageQuery = graphql`
  query CoachingPage {
    coaching: allMarkdownRemark(filter: {frontmatter: {key: {eq: "coaching"}}}) {
        nodes {
          frontmatter {
            title
            tarief
            image
          }
          html
        }
    }
    informatie: markdownRemark(frontmatter: {key: {eq: "zangles-informatie"}}) {
        html
    }
  }
`