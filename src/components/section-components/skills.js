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

import skillsStyles from "./skills.module.scss"

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
        {/* <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M 0 0 L 1000 0 L 1000 550 Q 975 0 950 0 Q 925 0 900 550 Q 875 0 850 0 Q 825 0 800 550 Q 775 0 750 0 Q 725 0 700 550 Q 675 0 650 0 Q 625 0 600 550 Q 575 0 550 0 Q 525 0 500 550 Q 475 0 450 0 Q 425 0 400 550 Q 375 0 350 0 Q 325 0 300 550 Q 275 0 250 0 Q 225 0 200 550 Q 175 0 150 0 Q 125 0 100 550 Q 75 0 50 0 Q 25 0 0 550 Z"
        ></path>
      </svg> */}
        {/* <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M 0 0 L 1000 0 L 500 1000 L 0 0 "
        ></path>
      </svg> */}
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M 0 0 L 1000 0 L 975 1000 L 950 0 L 925 1000 L 900 0 L 875 1000 L 850 0 L 825 1000 L 800 0 L 775 1000 L 750 0 L 725 1000 L 700 0 L 675 1000 L 650 0 L 625 1000 L 600 0 L 575 1000 L 550 0 L 525 1000 L 500 0 L 475 1000 L 450 0 L 425 1000 L 400 0 L 375 1000 L 350 0 L 325 1000 L 300 0 L 275 1000 L 250 0 L 225 1000 L 200 0 L 175 1000 L 150 0 L 125 1000 L 100 0 L 75 1000 L 50 0 L 25 1000 L 0 0 "
          ></path>
        </svg>
        {/* <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M 0 0 L 1000 0 L 950 1000 L 900 0 L 850 1000 L 800 0 L 750 1000 L 700 0 L 650 1000 L 600 0 L 550 1000 L 500 0 L 450 1000 L 400 0 L 350 1000 L 300 0 L 250 1000 L 200 0 L 150 1000 L 100 0 L 50 1000 L 0 0 "
          ></path>
        </svg> */}
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
