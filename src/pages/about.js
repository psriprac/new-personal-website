import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link } from "gatsby"
import MenuPage from "./menu"
import BackIcon from "../images/Back-Icon.svg"
import BurgerIcon from "../images/Burger.svg"

function Sidebar({ sideBar = false, setSideBar = () => {} }) {
    return (
        <AnimatePresence>
        {sideBar && (
            <>
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "-64px" }}
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

const About = () => {
    const [sideBar, setSideBar] = useState(false)
    const [scale] = useState(0)
    const [startAnim, setStartAnim] = useState(true)

    return (
        <AnimatePresence>
            <motion.div 
                id="view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div id="container">
                    <nav className={`fixed flex px-5 pt-12 pb-6 w-full bg-white ${sideBar ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div id="menu-button">
                        {sideBar ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                <BackIcon onClick={() => {
                                setSideBar((sideBar) => !sideBar)
                                }} />  
                            </motion.div>) : <BurgerIcon onClick={() => { setSideBar((sideBar) => !sideBar) }} />}
                        </div>
                    </nav>
                    <div id="pop-in">
                        <Sidebar {...{ sideBar, setSideBar }} className="relative"/>
                    </div>
                    <motion.div 
                        id="main-text" 
                        className="flex flex-col justify-center gap-4 h-screen mx-7 md:mx-24 lg:mx-60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: sideBar ? 0 : 1, display: sideBar ? "none" : "flex" }}
                        exit={{ opacity: 0 }}
                        transition={{ style: "spring", bounce: 0, duration: 0.5, delay: sideBar ? 0 : 0.5 }}
                    >
                        <div className="text-2xl flex flex-col gap-4 pt-5">
                            <p>I started using HTML on xanga.com (who the heck remembers that) in 2003.</p>
                            <p>Then, came MySpace, where my styling skills came to life when I changed my top 8 to top16.</p>
                            <p>I quit school in 2009, to make music, work in the real world, and figure out life.</p>
                            <p>I went back to school and graduated in 2020 with my degree in Computer Science.</p>
                            <p>Today, I spend my days studying the web, cooking good food, and playing great video games.</p>
                        </div>
                        <Link to="/projects">
                            <motion.div 
                                id="nextpage" 
                                className="flex flex-row items-center pt-3 pb-20 gap-4"
                                animate={{ scale: [scale, scale + 1.1, scale + 1] }}
                                transition={{ duration: 0.5, delay: startAnim ? 0.8 : 0 }} onClick={() => setStartAnim(false)}
                            >
                                <h1 className="text-4xl">Projects</h1>
                                <BackIcon style={{transform: "rotate(180deg)"}}/>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default About