import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import style from "./success.module.scss"
import SEO from "../components/seo"

function success() {
  return (
    <Layout
      right={
        <div className={style.content}>
          <h1>Success!</h1>
          <p>Uw contactformulier is verzonden!</p>
          <Link to="/">Terug</Link>
        </div>
      }
    >
      <SEO title="Success!" />
    </Layout>
  )
}

export default success
