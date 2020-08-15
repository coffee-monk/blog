import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyles from "./index-styles.module.scss"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <section className={indexStyles.services}>
          <h1>SERVICES</h1>

          <div className={indexStyles.serviceItems}>
            <div className={indexStyles.serviceItem}>
              <h3>Development</h3>
              <p>Full-Stack developer proficient in JS and Python.</p>
            </div>
            <div className={indexStyles.serviceItem}>
              <h3>Transcription</h3>
              <p>Transcription of Audio Recording to Text</p>
            </div>
            <div className={indexStyles.serviceItem}>
              <h3>Research</h3>
              <p>Data analysis, Research Methods, & Publishing Manuscripts.</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
