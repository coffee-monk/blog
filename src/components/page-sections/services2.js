import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import indexStyles from "./services2.module.scss"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      ed: file(relativePath: { eq: "ed.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={indexStyles.services}>
      <h1>SERVICES</h1>

      <div className={indexStyles.serviceItems}>
        <div className={indexStyles.serviceItem}>
          <Img
            style={{ minWidth: "30%" }}
            fluid={data.ed.childImageSharp.fluid}
          />
          <h3>Development</h3>
          <p>Full-Stack developer proficient in JS and Python</p>
        </div>
        <div className={indexStyles.serviceItem}>
          <Img
            style={{ minWidth: "30%" }}
            fluid={data.ed.childImageSharp.fluid}
          />
          <h3>Transcription</h3>
          <p>Transcription of Audio Recording to Text</p>
        </div>
        <div className={indexStyles.serviceItem}>
          <Img
            style={{ minWidth: "30%" }}
            fluid={data.ed.childImageSharp.fluid}
          />
          <h3>Research</h3>
          <p>Data analysis, Research Methods, & Publishing</p>
        </div>
      </div>
    </section>
  )
}

export default Services
