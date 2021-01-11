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
  faDocker,
  faGithub,
  faFigma,
  faAdobe,
  faUnity,
  faRProject,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDatabase,
  faChartBar,
  faVrCardboard,
  faChartPie,
  faVials,
  faMicrochip,
  faMapMarkerAlt,
  faMoon,
} from "@fortawesome/free-solid-svg-icons"

import skillsBarStyles from "./skill-bars.module.scss"

const SkillsBar = props => {
  const languageIconDict = {
    HTML: faHtml5,
    CSS: faCss3Alt,
    JS: faJs,
    React: faReact,
    Gatsby: faReact,
    Python: faPython,
    Flask: faPython,
    Django: faPython,
    Node: faNode,
    Git: faGithub,
    Linux: faLinux,
    Docker: faDocker,
    Netlify: faDatabase,
    Mongo: faDatabase,
    MySQL: faDatabase,
    Figma: faFigma,
    Photoshop: faAdobe,
    Illustrator: faAdobe,
    Unity: faUnity,
    R: faRProject,
    Statistics: faChartBar,
    "VR/AR": faVrCardboard,
    InfoVis: faChartPie,
    Testing: faVials,
    Arduino: faMicrochip,
    GIS: faMapMarkerAlt,
  }

  return (
    <div className={skillsBarStyles.container}>
      {props.languages.map((language, index) => (
        <div className={skillsBarStyles.skillBar}>
          <div className={skillsBarStyles.name}>{language.name}</div>
          <div className={skillsBarStyles.greybar}>
            <div
              className={skillsBarStyles.bar}
              style={{
                width: `${language.percent}`,
              }}
            >
              <div className={skillsBarStyles.logo}>
                <FontAwesomeIcon
                  icon={languageIconDict[language.name]}
                  style={{ fontSize: "1.25rem" }}
                />
              </div>
              {language.percent}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsBar
