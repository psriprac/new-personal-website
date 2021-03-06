import * as React from "react"

import BurgerIcon from "../images/Burger.svg"
import BackIcon from "../images/Back-Icon.svg"

import MenuPage from "./menu"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link } from "gatsby"

function Sidebar({ sideBar = false, setSideBar = () => {} }) {
  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0px" }}
            exit={{ x: "-100%" }}
            transition={{ style: "spring", bounce: 0, duration: 0.5 }}
          >
            <MenuPage />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const IndexPage = () => {
  const [scale] = useState(0)
  const [sideBar, setSideBar] = useState(false)
  const [startAnim, setStartAnim] = useState(true)

  return (
    <AnimatePresence>
      <motion.div 
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <nav className={`fixed flex px-5 pt-12 pb-6 w-full z-40 bg-white flex-row`}>
          <div id="menu-button">
            {sideBar ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <button><BackIcon onClick={() => {
                  setSideBar((sideBar) => !sideBar)
                }} />  </button>
            </motion.div>) : <button> <BurgerIcon onClick={() => { setSideBar((sideBar) => !sideBar) }} /> </button>}
          </div>
        </nav>
        <div id="pop-in">
          <Sidebar {...{ sideBar, setSideBar }} className="fixed z-50"/>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{  
            scale: sideBar ? 0.6 : 1,
            display: sideBar ? "none" : "flex",
            opacity: sideBar ? 0 : 1
          }} 
          exit={{ opacity: 0 }}
          transition={{ 
            style: "spring", 
            bounce: 0, 
            duration: 0.5,
            delay: sideBar ? 0 : 0.5
          }} 
          className=""
        >
          <div id="main">
            <div id="main-text" className="flex flex-col justify-center h-screen">
              <h1 className="text-5xl mx-7 mb-5 md:mx-24 lg:mx-60">Hi, I'm Patrick</h1>
              <h3 className="text-2xl mx-7 md:mx-24 lg:mx-60">I'm a web developer currently working as an IT support professional.</h3>
              <div id="action-icon" className="mx-7 mt-5 drop-shadow-xl md:mx-24 lg:mx-60">
{/*                 <motion.svg 
                animate={{
                  scale: [scale, scale + 1.25, scale + 1],
                  rotate: [rotation, rotation + 360],
                }} 
                transition={{ 
                  duration: 0.5, delay: startAnim ? 0.8 : 0 
                }} 
                onClick={() => {setRotation(rotation + 360); setStartAnim(false)}}
                className="w-20 h-20 rounded-full"> */}
                  <Link to="/about">
                    <motion.div 
                      id="nextpage" 
                      className="flex flex-row items-center gap-4"
                      animate={{ scale: [scale, scale + 1.1, scale + 1] }}
                      transition={{ duration: 0.5, delay: startAnim ? 0.8 : 0 }} onClick={() => setStartAnim(false)}
                      >
                      <motion.button 
                        className="bg-[#57f179] rounded-full p-7"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        >
                        <h1 className="text-2xl">About Me</h1>
                      </motion.button>
                    </motion.div>
                  </Link>
{/*                 </motion.svg> */}
              </div>
            </div>
          </div>
        </motion.div>
        <div id="footer" className="h-1"></div>
      </motion.div>
    </AnimatePresence>
  )
}

export default IndexPage
