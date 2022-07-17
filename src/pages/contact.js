import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link } from "gatsby"
import MenuPage from "./menu"
import BackIcon from "../images/Back-Icon.svg"
import BurgerIcon from "../images/Burger.svg"
import ActionIcon from "../images/Action-Button.svg"

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

const Contact = () => {
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
                        id="main-container" 
                        className="flex flex-col pt-32 mx-7 md:mx-24 lg:mx-60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: sideBar ? 0 : 1, display: sideBar ? "none" : "flex" }}
                        exit={{ opacity: 0 }}
                        transition={{ style: "spring", bounce: 0, duration: 0.5, delay: sideBar ? 0 : 0.5 }}
                    >
                        <div className="flex flex-col">
                        <Link to="/">
                            <motion.div 
                                id="nextpage" 
                                className="flex flex-row items-center gap-4"
                                animate={{ scale: [scale, scale + 1.1, scale + 1] }}
                                transition={{ duration: 0.5, delay: startAnim ? 2 : 0 }} onClick={() => setStartAnim(false)}
                            >
                                <h1 className="text-4xl">Back to Home</h1>
                                <BackIcon style={{transform: "rotate(180deg)"}}/>
                            </motion.div>
                            </Link>
                            <h1 className="text-5xl py-8">I'd love to hear from you</h1>

                            <form name="contactForm" method="post" data-netlify="true">
                                <ul>
                                    <input type="hidden" name="form-name" value="contactForm" />  
                                    <li className="flex flex-col py-1">
                                        <label htmlFor="name" className="text-2xl">Name:</label>
                                        <input type="text" id="name" name="user_name" className="bg-slate-200 p-2 rounded"/>
                                    </li>
                                    <li className="flex flex-col py-1">
                                        <label htmlFor="email" className="text-2xl">Email:</label>
                                        <input type="text" id="email" name="user_email" className="bg-slate-200 p-2 rounded"/>
                                    </li>
                                    <li className="flex flex-col py-1">
                                        <label htmlFor="msg" className="text-2xl">Message:</label>
                                        <textarea id="msg" name="user_msg" className="bg-slate-200 p-2 rounded resize-none h-36"/>
                                    </li>
                                    <li className="flex flex-row-reverse py-1">
                                        <motion.div
                                            whileTap={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ActionIcon onClick={() => {document.forms["contactForm"].submit()}} style={{transform: "rotate(270deg)"}}/>
                                        </motion.div>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Contact