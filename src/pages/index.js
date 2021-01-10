import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Services from "../components/section-components/services"
import Skills from "../components/section-components/skills"
import About from "../components/section-components/about"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Services />
        <Skills />
        <About />
      </Layout>
    )
  }
}

export default IndexPage
