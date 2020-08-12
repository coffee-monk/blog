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
      <footer>
        <section className={footerStyles.contactContainer}>
          <div className={footerStyles.contactForm}>
            <h2>CONTACT</h2>
            <h5>Have a question or want to work together?</h5>
            <form className={footerStyles.contactFields}>
              <input type="text" name="name" id="name" placeholder="Name" />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />

              <textarea
                className={footerStyles.textArea}
                name="message"
                id="message"
                placeholder="Enter Message"
              ></textarea>
            </form>
            <input
              className={footerStyles.submit}
              type="submit"
              value="Submit"
            />
          </div>
        </section>

        <section className={footerStyles.footerContainer}>
          <div
            className={`${footerStyles.footerLeft} ${footerStyles.innerWrapper}`}
          >
            <h4 className={footerStyles.date}>
              © {new Date().getFullYear()} Michael Carnevale
            </h4>
          </div>

          <div
            className={`${footerStyles.footerCenter} ${footerStyles.innerWrapper}`}
          >
            <h2 onClick={this.topFunction} className={footerStyles.upArrow}>
              {/* &#8673; */}
              &#8679;
            </h2>
          </div>

          <div
            className={`${footerStyles.footerRight} ${footerStyles.innerWrapper}`}
          >
            <ul className={footerStyles.socialMedia}>
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
        </section>
      </footer>
    )
  }
}

export default Footer
