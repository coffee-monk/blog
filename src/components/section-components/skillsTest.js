import React from "react"
import SkillBars from "./skill-bars"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTabletAlt,
  faClock,
  faRocket,
  faNetworkWired,
  faGlobe,
  faDatabase,
  faMicroscope,
  faChartPie,
  faPenNib,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons"

import skillsStyles from "./skillsTest.module.scss"

function Skills() {
  const skillList = [
    {
      title: "Front-End Development",
      icon: faTabletAlt,
      languages: [
        { name: "JS", percent: "90%" },
        { name: "HTML", percent: "85%" },
        { name: "CSS", percent: "85%" },
        { name: "React", percent: "80%" },
        { name: "Gatsby", percent: "75%" },
      ],
    },
    {
      title: "Back-End Development",
      benefit: "Hosting",
      icon: faNetworkWired,
      languages: [
        { name: "Node", percent: "90%" },
        { name: "Python", percent: "85%" },
        { name: "Linux", percent: "80%" },
        { name: "MySQL", percent: "70%" },
        { name: "Mongo", percent: "70%" },
      ],
    },
    {
      title: "Analytics",
      icon: faChartLine,
      languages: [
        { name: "Statistics", percent: "90%" },
        { name: "Python", percent: "85%" },
        { name: "InfoVis", percent: "80%" },
        { name: "R", percent: "75%" },
        { name: "GIS", percent: "70%" },
      ],
    },
    {
      title: "Design",
      icon: faPenNib,
      languages: [
        { name: "Photoshop", percent: "90%" },
        { name: "Illustrator", percent: "80%" },
        { name: "Figma", percent: "70%" },
        { name: "Unity", percent: "70%" },
        { name: "Arduino", percent: "70%" },
      ],
    },
  ]

  return (
    <React.Fragment>
      <section className={skillsStyles.skillsSection}>
        <h1>SKILLS</h1>
        <div className={skillsStyles.container}>
          {skillList.map((skill, index) => (
            <div className={skillsStyles.skill}>
              <div className={skillsStyles.title}>
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={skillsStyles.fa}
                />
                <h2>{skill.title}</h2>
              </div>

              <div className={skillsStyles.skillBars}>
                <SkillBars languages={skill.languages} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Skills
