import React from "react"
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faPython,
  faNode,
  faLinux,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

import skillsBarStyles from "./skill-bars.module.scss"

const SkillsBar = () => {
  const languages = [
    { name: "HTML", percent: "70%", icon: faHtml5 },
    { name: "CSS", percent: "70%", icon: faCss3Alt },
    { name: "JS", percent: "80%", icon: faJs },
    { name: "React", percent: "60%", icon: faReact },
    { name: "Python", percent: "60%", icon: faPython },
    { name: "Node", percent: "60%", icon: faNodeJs },
    { name: "Linux", percent: "60%", icon: faLinux },
    { name: "Mongo", percent: "60%", icon: faDatabase },
    { name: "MySQL", percent: "60%", icon: faDatabase },
  ]

  return (
    <React.Fragment>
      {languages.map((language, index) => (
        <div style={{ width: "100%" }}>
          <div className={skillsBarStyles.container}>
            <span className={skillsBarStyles.name}>{language.name}</span>
            <div className={skillsBarStyles.greybar}>
              <div
                className={skillsBarStyles.bar}
                style={{
                  width: `${language.percent}`,
                }}
              >
                <div className={skillsBarStyles.logo}>
                  <FontAwesomeIcon
                    icon={language.icon}
                    style={{ fontSize: "1.25rem" }}
                  />
                </div>
                {language.percent}
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default SkillsBar
