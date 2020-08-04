import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

import VideoBackground from "./video-background"
import Navbar from "./navbar"

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
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
          external
          css
          styles
        >
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: none;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  text-decoration: none;
`

export default Layout
