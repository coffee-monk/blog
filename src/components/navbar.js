import React, { Component } from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.module.scss"

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.listener = null
    this.state = {
      scrollPosition: this.props.scrollPosition,
      fade: this.props.fade,
    }
  }

  componentDidMount() {
    if (this.state.fade) {
      this.listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
          if (this.state.scrollPosition !== "below-top") {
            this.setState({ scrollPosition: "below-top" })
          }
        } else {
          if (this.state.scrollPosition !== "top") {
            this.setState({ scrollPosition: "top" })
          }
        }
      })
    }
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener)
  }

  render() {
    return (
      <nav
        className={navbarStyles.navBar}
        style={{
          backgroundColor:
            this.state.scrollPosition === "top"
              ? "rgba(0,0,0,0)"
              : "rgba(0,0,0,0.5 )",
        }}
      >
        <div className={navbarStyles.nav}>
          {/* <img
            className={navbarStyles.logo}
            src="https://i.postimg.cc/XYgSxQQZ/logo.png"
            alt=""
          /> */}
          <h4>&#60;Michael Carnevale/&#62;</h4>

          <ul className={navbarStyles.navArea}>
            <li>
              <a href={`${__PATH_PREFIX__}/`}>Portfolio</a>
            </li>
            <li>
              <a href={`${__PATH_PREFIX__}/404/`}>Resume</a>
            </li>
            <li>
              <a href={`${__PATH_PREFIX__}/blog/`}>Blog</a>
            </li>
            <Link href="#" className={navbarStyles.btn}>
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
