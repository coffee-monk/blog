import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faFileAlt,
  faChartLine,
 faPalette,
  faMicroscope,
} from "@fortawesome/free-solid-svg-icons"

import servicesStyles from "./services.module.scss"

const Services = () => {
  const services = [
    {
      icon: faLaptopCode,
      title: "Development",
      caption: [{ item: "Full-Stack Web Development" }],
    },
    {
      icon: faPalette,
      title: "Design",
      caption: [{ item: "Digital" }, { item: "UI/UX" }, { item: "Material" }],
    },
    {
      icon: faMicroscope,
      title: "Research",
      caption: [{ item: "Data Analysis" }, { item: "Research Methods" }],
    },
    {
      icon: faFileAlt,
      title: "Editorial",
      caption: [
        { item: "Editing" },
        { item: "Tutoring" },
        { item: " Transcription" },
      ],
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

            <span className={servicesStyles.caption}>
              {service.caption.map((serviceElement, index) => (
                <p>
                  {serviceElement.item}
                  <span className={servicesStyles.circleChar}>&#8728;</span>
                </p>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
