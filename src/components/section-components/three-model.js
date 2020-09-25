import React, { Component } from "react"
import * as THREE from "three"
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader"
import OrbitControls from "three-orbitcontrols"

import threeModelStyles from "./three-model.module.scss"

class ThreeModel extends Component {
  componentDidMount() {
    // width/height of div to fill
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    this.scene = new THREE.Scene()
    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setClearColor(0xffffff, 0) // transparent
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    this.camera.position.z = 8
    this.camera.position.y = 5
    //Camera Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    //LIGHTS
    var lights = []
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0)
    lights[1] = new THREE.PointLight(0xffffff, 1, 0)
    lights[2] = new THREE.PointLight(0xffffff, 1, 0)
    lights[0].position.set(0, 200, 0)
    lights[1].position.set(100, 200, 100)
    lights[2].position.set(-100, -200, -100)
    this.scene.add(lights[0])
    this.scene.add(lights[1])
    this.scene.add(lights[2])

    //ADD Your 3D Models here
    this.renderScene()
    //start animation
    this.start()

    const bufferCubegeometry = new THREE.BoxBufferGeometry(5, 5, 5)
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    this.cube = new THREE.Mesh(bufferCubegeometry, material)
    this.scene.add(this.cube)

    //LOAD texture from Web and on completion apply it on SPHERE
    new THREE.TextureLoader().load(
      "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      texture => {
        //Update Texture
        this.cube.material.map = texture
        this.cube.material.needsUpdate = true
      },
      xhr => {
        //Download Progress
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      error => {
        //Error CallBack
        console.log("An error happened" + error)
      }
    )
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  animate = () => {
    //Rotate Models
    if (this.cube) this.cube.rotation.y += 0.01
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        className={threeModelStyles.main}
        styles={{ width: "100%", height: "100%" }}
        ref={mount => {
          this.mount = mount
        }}
      />
    )
  }
}
export default ThreeModel

// const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
// const material = new THREE.MeshBasicMaterial({
//   color: "#0F0",
// });
// this.cubeMesh = new THREE.Mesh(cubeGeometry, material);
// this.scene.add(this.cube);

// const material = new THREE.MeshBasicMaterial({
//   color: "#0F0",
//   wireframe: true,
// });
