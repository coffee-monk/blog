import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

import VideoBackground from "./video-background"
import Navbar from "./navbar"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <Navbar fade={1} scrollPosition={"top"} />
          <VideoBackground />
        </div>
      )
    } else {
      header = (
        <div>
          <Navbar fade={0} scrollPosition={"below-top"} />
        </div>
      )
    }
    return (
      <Wrapper>
        <header>{header}</header>

        <main>{children}</main>

        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: none;
`

export default Layout
