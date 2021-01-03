import React from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
import styles from "./TabletMenu.module.scss";


const TabletMenu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <Link to="/" className={styles.title}>De kunst van het zingen</Link>
      </div>
      <nav className={styles.nav}>
        <div className={styles.menuItem}><Link to="/over-mij" activeClassName={styles.linkActive}>Mariëtte</Link></div>
        <div className={styles.menuItem}><Link to="/sopraan" activeClassName={styles.linkActive}>Sopraan</Link></div>
        <div className={styles.menuItem}><Link to="/lessen" activeClassName={styles.linkActive}>Coaching</Link></div>
        <div className={styles.menuItem}><Link to="/on-stage-now" activeClassName={styles.linkActive}>On Stage Now</Link></div>
        <div className={`${styles.menuItem} ${styles.right}`}><Link to="/contact" activeClassName={styles.linkActive}>Contact</Link></div>
      </nav>
    </header>
  )
}



export default TabletMenu
