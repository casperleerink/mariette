import React from 'react'
import Dahlia from "./Dahlia"
// import styles from "./Banner.module.scss"
function Banner({className}) {
    return (
        <div className={className}>
            <Dahlia/>
            <q>Zingen maakt blij en geeft energie!</q>
            <em>- Mariëtte</em>
        </div>
    )
}

export default Banner
