import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faFileAlt,
  faChartLine,
  faPalette,
  faMicroscope
} from "@fortawesome/free-solid-svg-icons"

import servicesStyles from "./services.module.scss"

const Services = () => {
  const services = [
    {
      icon: faLaptopCode,
      title: "Development",
      caption: "Full-Stack Web Development",
    },
    {
      icon: faPalette,
      title: "Design",
      caption: "Visual & Audio Digital Design",
    },
    {
      icon: faMicroscope,
      title: "Research",
      caption: "Data analysis & Research Methods",
    },
    {
      icon: faFileAlt,
      title: "Editorial",
      caption: "Editing, Tutoring, & Transcription",
    },
  ]

  return (
    <section className={servicesStyles.servicesSection}>
      <h1>SERVICES</h1>

      <div className={servicesStyles.serviceItems}>
        {services.map((service, index) => (
          <div className={servicesStyles.serviceItem}>
            <FontAwesomeIcon
              className={servicesStyles.serviceIcon}
              icon={service.icon}
            />
            <h3>{service.title}</h3>
            <p>{service.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
