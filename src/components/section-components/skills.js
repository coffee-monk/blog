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
} from "@fortawesome/free-solid-svg-icons"

import skillsStyles from "./skills.module.scss"

function Skills() {
  const skillList = [
    {
      title: "Front-End Development",
      summary: [
        { benefit: "Super Fast", icon: faClock },
        { benefit: "Responsive", icon: faTabletAlt },
        { benefit: "Dynamic", icon: faRocket },
      ],
      languages: [
        { name: "HTML", percent: "70%" },
        { name: "CSS", percent: "70%" },
        { name: "JS", percent: "80%" },
        { name: "React", percent: "60%" },
        { name: "Gatsby", percent: "60%" },
      ],
    },
    {
      title: "Back-End Development",
      summary: [
        { benefit: "Hosting", icon: faNetworkWired },
        { benefit: "Web App", icon: faGlobe },
        { benefit: "Database", icon: faDatabase },
      ],
      languages: [
        { name: "Node", percent: "60%" },
        { name: "Python", percent: "60%" },
        { name: "Git", percent: "60%" },
        { name: "Linux", percent: "60%" },
        { name: "Mongo", percent: "60%" },
        { name: "MySQL", percent: "60%" },
      ],
    },
    {
      title: "Analytics",
      summary: [
        { benefit: "Experiment", icon: faMicroscope },
        { benefit: "Statistics", icon: faChartPie },
        { benefit: "Publication", icon: faDatabase },
      ],
      languages: [
        { name: "Python", percent: "60%" },
        { name: "R", percent: "60%" },
        { name: "Matlab", percent: "60%" },
        { name: "Stats", percent: "60%" },
        { name: "InfoVis", percent: "60%" },
      ],
    },
    {
      title: "Design",
      summary: [
        { benefit: "Experiment", icon: faMicroscope },
        { benefit: "Statistics", icon: faChartPie },
        { benefit: "Publication", icon: faDatabase },
      ],
      languages: [
        { name: "Photoshop", percent: "60%" },
        { name: "Premiere", percent: "60%" },
        { name: "Illustrator", percent: "60%" },
        { name: "Figma", percent: "60%" },
        { name: "Unity", percent: "60%" },
        { name: "Rhino", percent: "60%" },

        { name: "Blender", percent: "60%" },

      ],
    },
  ]

  return (
    <React.Fragment>
      <div className={skillsStyles.container}>
       
        {skillList.map((skill, index) => (
          <div className={skillsStyles.skill}>
            <div className={skillsStyles.summary}>
              <h2>{skill.title}</h2>
              <div className={skillsStyles.benefits}>
                {skill.summary.map((item, index) => (
                  <div>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={skillsStyles.fa}
                    />
                    <h4>{item.benefit}</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className={skillsStyles.skillBars}>
              <SkillBars languages={skill.languages} />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Skills
