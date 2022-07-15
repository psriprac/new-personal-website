import * as React from "react"
import BurgerIcon from "../images/Burger.svg"
import ActionIcon from "../images/Action-Button.svg"
import { motion } from "framer-motion"
import { useState } from "react"

const IndexPage = () => {
  const [rotation, setRotation] = useState(0)
  const [scale] = useState(0)
  return (
    <div className="flex flex-col justify-between h-screen">
      <nav className="flex justify-between justify-self-start mx-5 mt-12 mb-6">
        <div id="menu-button">
          <BurgerIcon />  
        </div>
        <div id="download">
          Help!
        </div>
      </nav>
      <div className="">
        <div id="main">
          <div id="main-text">
            <h1 className="text-5xl mx-7 mb-5 md:mx-24 lg:mx-60">Hi, I'm Patrick</h1>
            <h3 className="text-2xl mx-7 md:mx-24 lg:mx-60">I'm a web developer currently working as an IT support professional.</h3>
            <div id="action-icon" className="mx-7 mt-5 drop-shadow-xl md:mx-24 lg:mx-60">
              <motion.svg animate={{
                scale: [scale, scale + 1.25, scale + 1],
                rotate: [rotation, rotation + 360],
              }} onClick={() => {setRotation(rotation + 360)}}
              className="w-20 h-20 rounded-full">
                <ActionIcon />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="h-1"></div>
    </div>
  )
}

export default IndexPage
