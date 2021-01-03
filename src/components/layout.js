//See: https://www.gatsbyjs.org/docs/use-static-query/
import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
// import {useStaticQuery, graphql} from "gatsby"
import styles from "./layout.module.scss"
import Menu from "./menus/Menu";
import MobileMenu from "./menus/MobileMenu";
import Banner from "./Banner";
import Footer from "./Footer";
import BackToTop from "./BackToTop";


const Layout = ({children, top, left, right, contact}) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    const w = window.innerWidth;
    if (w < 650) {
      setDevice("mobile");
    } else if (w < 1000) {
      setDevice("tablet");
    } else {
      setDevice("laptop");
    }
  }, []);
  const Mobile = () => {
    return (
      <>
        <MobileMenu />
        <div className={styles.top}>{top}</div>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>{right}</div>
        <div className={styles.content}>
          {children}
        </div>
      </>
    )
  }
  const Laptop = () => {
    return (
      <>
        <Menu/>
        <div className={styles.main}>
          <div className={styles.top}>{top}</div>
          <Banner className={styles.banner}/>
          <div className={styles.right}>{right}</div>
          <div className={styles.left}>{left}</div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </>
    )
  }
  return (
    <>
      {device && 
        <>
          {device === "mobile" ? <Mobile/> : <Laptop/>}
          {!contact && <Footer/>}
          <BackToTop />
        </>
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
