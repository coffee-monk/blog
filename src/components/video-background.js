import React, { Component } from "react"
import Typer from "./typer"

import vidBgStyles from "./video-background-styles.module.scss"
import { SocialIcon } from "react-social-icons"

export class VideoBackground extends Component {
  _onReady(event) {
    event.target.mute()
  }

  _onEnd(event) {
    event.target.playVideo()
  }

  render() {
    // const videoOptions = {
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //     controls: 0,
    //     rel: 0,
    //     showinfo: 0,
    //   },
    // }

    return (
      <section className={vidBgStyles.showcase}>
        <div className={vidBgStyles.videoContainer}>
          <video
            // src="https://traversymedia.com/downloads/video.mov"
            src={require("../../content/assets/pexels-pavel-danilyuk-5495898.mp4")}
            autoPlay
            muted
            loop
          ></video>
          {/* <YouTube
            videoId="Z6FPJOgfCkc"
            opts={videoOptions}
            className="video-iframe"
            onReady={this._onReady}
            onEnd={this._onEnd}
          /> */}
        </div>
        <div className={vidBgStyles.content}>
          <h1 className={vidBgStyles.content}>Michael Carnevale</h1>

          <h2>
            <span style={{ color: "#f92672" }}>&#8728;</span> Research{" "}
            <span style={{ color: "#f92672" }}>&#8728;</span> Development{" "}
            <span style={{ color: "#f92672" }}>&#8728;</span> Design{" "}
            <span style={{ color: "#f92672" }}>&#8728;</span>
          </h2>
          {/* <a href="#about" className={vidBgStyles.btn}>
            Read More
          </a> */}
        </div>

        <div className={vidBgStyles.bottomLeft}>
          <span className={vidBgStyles.typer}>
            <h4 style={{ color: "#f92672" }}>$</h4>
            <Typer
              dataText={[
                "Hi, I'm Mike!",
                "I am a Researcher + Developer + Designer",
                "Tell Me Your COOL PROJECT IDEA!!!",
                "I Do Full-Stack Development",
                "I Like JS + Python + Linux",
                "I Create Digital Products",
                "I also do Transcription & Editing",
                "Let's Build Something Awesome!!!",
              ]}
            />
          </span>
        </div>

        <ul className={vidBgStyles.bottomRight}>
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
      </section>
    )
  }
}

export default VideoBackground
