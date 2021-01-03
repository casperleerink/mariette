import React from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
import styles from "./Menu.module.scss";


const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link to="/">De kunst van het zingen</Link>
      </div>
      <nav className={styles.nav}>
        <div className={styles.menuItem}><Link to="/over-mij" activeClassName={styles.linkActive}>Mariëtte</Link></div>
        <div className={styles.menuItem}><Link to="/sopraan" activeClassName={styles.linkActive}>Sopraan</Link></div>
        <div className={styles.menuItem}><Link to="/coaching" activeClassName={styles.linkActive}>Coaching</Link></div>
        <div className={styles.menuItem}><Link to="/on-stage-now" activeClassName={styles.linkActive}>On Stage Now</Link></div>
        <div className={styles.menuItem}><Link to="/contact" activeClassName={styles.linkActive}>Contact</Link></div>
      </nav>
    </header>
  )
}



export default Menu
