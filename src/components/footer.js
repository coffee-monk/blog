import React, { Component } from "react"
import { SocialIcon } from "react-social-icons"

import footerStyles from "./footer-styles.module.scss"

export class Footer extends Component {
  topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  render() {
    return (
      <footer className={footerStyles.footerContainer}>
        <div className={`${footerStyles.left} ${footerStyles.innerWrapper}`}>
          <h4 className={footerStyles.footerLeft}>
            © {new Date().getFullYear()} Michael Carnevale
          </h4>
        </div>

        <div className={`${footerStyles.center} ${footerStyles.innerWrapper}`}>
          <h2 onClick={this.topFunction} className={footerStyles.footerMiddle}>
            {/* &#8673; */}
            &#8679;
          </h2>
        </div>

        <div className={`${footerStyles.right} ${footerStyles.innerWrapper}`}>
          <ul className={footerStyles.footerRight}>
            <li>
              <SocialIcon
                network="linkedin"
                style={{ height: 30, width: 30 }}
                fgColor="fff"
                bgColor="transparent"
                url="http://twitter.com/github"
              />
            </li>
            <li>
              <SocialIcon
                network="github"
                style={{ height: 30, width: 30 }}
                fgColor="#fff"
                bgColor="transparent"
                url="http://twitter.com/linkedin"
              />
            </li>
            <li>
              <SocialIcon
                network="twitter"
                style={{ height: 30, width: 30 }}
                fgColor="#fff"
                bgColor="transparent"
                url="http://twitter.com/jaketrent"
              />
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
