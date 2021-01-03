import React, { useState } from "react"
// import styled from "styled-components"
import { Link } from "gatsby"
import styles from "./MobileMenu.module.scss";
import Dahlia from "../Dahlia";
import {FaBars} from "react-icons/fa";


const MobileMenu = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleToggle = () => {
    setMenuExpanded(!menuExpanded);
  };
  return (
    <header className={`${styles.header} ${menuExpanded ? styles.expanded : false }`}>
      <div className={styles.titleContainer}>
        <Link to="/" className={styles.title}>De kunst van het zingen</Link>
      </div>
      <div className={styles.bars}>
        <FaBars onClick={handleToggle}/> 
      </div>

      {/* second row! */}
      <div className={styles.expansion}>
        <div className={styles.banner}>
          <Dahlia className={styles.dahlia}/>
          <q>Zingen maakt blij en geeft energie!</q>
          <em>- Mariëtte</em>
        </div>
        <nav className={styles.nav}>
          <div className={styles.menuItem}><Link to="/over-mij" activeClassName={styles.linkActive}>Mariëtte</Link></div>
          <div className={styles.menuItem}><Link to="/sopraan" activeClassName={styles.linkActive}>Sopraan</Link></div>
          <div className={styles.menuItem}><Link to="/coaching" activeClassName={styles.linkActive}>Coaching</Link></div>
          <div className={styles.menuItem}><Link to="/on-stage-now" activeClassName={styles.linkActive}>On Stage Now</Link></div>
          <div className={`${styles.menuItem} ${styles.right}`}><Link to="/contact" activeClassName={styles.linkActive}>Contact</Link></div>
        </nav>
      </div>
      
    </header>
  )
}



export default MobileMenu
