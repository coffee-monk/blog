import React, { Component } from "react"
import { SocialIcon } from "react-social-icons"
import { Element } from "react-scroll"
import Particles from "react-particles-js"

import footerStyles from "./footer-styles.module.scss"

export class Footer extends Component {
  topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  render() {
    return (
      <footer>
        <Element id="contact-form" name="contact-form">
          <section>
            <Particles
              width="100%"
              style={{
                position: "absolute",
                left: "0",
                background: `black`,
                zIndex: "-1",
              }}
              params={particleParameters}
            />
            <div className={footerStyles.contactContainer}>
              <div className={footerStyles.contactForm}>
                <h2>CONTACT</h2>
                <h5>Have a question or want to work together?</h5>

                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className={footerStyles.contactFields}
                >
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
                  <input
                    className={footerStyles.submit}
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </section>
        </Element>

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
                  fgColor="#fff"
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

const particleParameters = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
}

export default Footer
