import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link } from "gatsby"
import MenuPage from "./menu"
import BackIcon from "../images/Back-Icon.svg"
import BurgerIcon from "../images/Burger.svg"
import DownloadIcon from "../images/Download-Button.svg"

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

const Resume = () => {
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
                    <nav className={`fixed flex px-5 pt-12 pb-6 w-full justify-between bg-white ${sideBar ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div id="menu-button">
                        {sideBar ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                <BackIcon onClick={() => {
                                setSideBar((sideBar) => !sideBar)
                                }} />  
                            </motion.div>) : <BurgerIcon onClick={() => { setSideBar((sideBar) => !sideBar) }} />}
                        </div>
                        <motion.div 
                            id="download"
                            animate={{ scale: sideBar ? 0 : 1 }}
                            transition={{ duration: sideBar ? 0 : 0.2 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <DownloadIcon />
                        </motion.div>
                    </nav>
                    <div id="pop-in">
                        <Sidebar {...{ sideBar, setSideBar }} className="relative"/>
                    </div>
                    <motion.div 
                        id="main-container" 
                        className="flex flex-col w-auto pt-32 mx-7 md:mx-24 lg:mx-60 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: sideBar ? 0 : 1, display: sideBar ? "none" : "flex" }}
                        exit={{ opacity: 0 }}
                        transition={{ style: "spring", bounce: 0, duration: 0.5, delay: sideBar ? 0 : 0.5 }}
                    >
                        <div id="name-and-info">
                            <h1 className="text-3xl font-bold">Patrick Sriprachandr</h1>
                            <h3 className="text-xl">San Diego, CA<br />psriprac@gmail.com</h3>
                        </div>

                        <div id="education">
                            <h2 className="text-2xl font-bold border-b-2">Education</h2>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p>California State University, San Marcos</p>
                                <p className="text-right">May 2020</p>
                            </div>
                            <p className="text-base italic">Bachelor of Science, Computer Science</p>
                        </div>
                        
                        <div id="experience">
                            <h2 className="text-2xl font-bold border-b-2">Experience</h2>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p>ICW Group</p>
                                <p className="text-right">May 2021 to Present</p>
                            </div>
                            <p className="text-base italic">Desktop Technician II</p>
                            <ul className="list-disc pl-5">
                                <li>Duties</li>
                                <li>Duties</li>
                                <li>Duties</li>
                            </ul>

                            <div className="flex flex-row text-base justify-between pt-2">
                                <p>Geek Squad</p>
                                <p className="text-right">Jan 2018 to May 2021</p>
                            </div>
                            <p className="text-base italic">Advanced Repair Agent</p>
                            <ul className="list-disc pl-5">
                                <li>Duties</li>
                                <li>Duties</li>
                                <li>Duties</li>
                            </ul>

                            <div className="flex flex-row text-base justify-between pt-2">
                                <p>SeaWorld San Diego</p>
                                <p className="text-right">Apr 2013 to Jan 2018</p>
                            </div>
                            <p className="text-base italic">Assistant Supervisor</p>
                            <ul className="list-disc pl-5">
                                <li>Duties</li>
                                <li>Duties</li>
                                <li>Duties</li>
                            </ul>
                        </div>
                        <div id="proficiencies">
                            <h2 className="text-2xl font-bold border-b-2">Proficiencies</h2>
                            <ul className="grid grid-row md:grid-cols-3 lg:grid-cols-4 list-disc pl-5 pt-2">
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                                <li>Skill</li>
                            </ul>
                        </div>
                            <motion.div 
                                id="nextpage" 
                                className="flex flex-row items-center pt-3 pb-20 gap-4"
                                animate={{ scale: [scale, scale + 1.1, scale + 1] }}
                                transition={{ duration: 0.5, delay: startAnim ? 0.8 : 0 }} onClick={() => setStartAnim(false)}
                            >
                                <Link to="/contact">
                                    <motion.button 
                                        className="bg-[#57f179] rounded-full p-5"
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <h1 className="text-2xl">Contact</h1>
                                    </motion.button>
                                </Link>
                            {/* <BackIcon style={{transform: "rotate(0deg)"}}/> */}
                            </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Resume