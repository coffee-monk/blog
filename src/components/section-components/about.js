import React from "react"
import ThreeModel from "./three-model"

import aboutStyles from "./about.module.scss"

function About() {
  return (
    <section className={aboutStyles.aboutSection}>
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M 0 0 L 1000 0 L 1000 550 Q 975 0 950 0 Q 925 0 900 550 Q 875 0 850 0 Q 825 0 800 550 Q 775 0 750 0 Q 725 0 700 550 Q 675 0 650 0 Q 625 0 600 550 Q 575 0 550 0 Q 525 0 500 550 Q 475 0 450 0 Q 425 0 400 550 Q 375 0 350 0 Q 325 0 300 550 Q 275 0 250 0 Q 225 0 200 550 Q 175 0 150 0 Q 125 0 100 550 Q 75 0 50 0 Q 25 0 0 550 Z"
        ></path>
      </svg>
      <h1>ABOUT</h1>
      <div className={aboutStyles.aboutContent}>
        <div style={{ width: "200px", height: "200px" }}>
          <ThreeModel />
        </div>
        <div>
          <h4>lorem30 dfsadfsadadad sdfasdfsa sdf sdfsadfasd fdfs d</h4>
        </div>
      </div>
    </section>
  )
}

export default About
