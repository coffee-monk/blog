import React, { Component } from "react"
import YouTube from "react-youtube"

import vidBgStyles from "./video-background-styles.module.scss"

export class VideoBackground extends Component {
  _onReady(event) {
    event.target.mute()
  }

  _onEnd(event) {
    event.target.playVideo()
  }

  render() {
    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
      },
    }

    return (
      <section className={vidBgStyles.showcase}>
        <div className={vidBgStyles.videoContainer}>
          <video
            src="https://traversymedia.com/downloads/video.mov"
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
          <h1 className={vidBgStyles.content}>Shoot For The Stars</h1>
          <h3>Full screen video landing page</h3>
          <a href="#about" className={vidBgStyles.btn}>
            Read More
          </a>
        </div>
      </section>
    )
  }
}

export default VideoBackground
