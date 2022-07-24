import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link } from "gatsby"

import MenuPage from "./menu"
import BackIcon from "../images/Back-Icon.svg"
import BurgerIcon from "../images/Burger.svg"
import DownloadIcon from "../images/Download-Button.svg"
import HTMLIcon from "../images/html.svg"
import CSSIcon from "../images/css.svg"
import TailwindIcon from "../images/tailwind.svg"
import JSIcon from "../images/js.svg"
import GatsbyIcon from "../images/gatsby.svg"
import ReactIcon from "../images/reactjs.svg"
import NetlifyIcon from "../images/netlify.svg"
import FigmaIcon from "../images/figma.svg"
import VSCIcon from "../images/vscode.svg"
import GitHubIcon from "../images/github.svg"
import CPPIcon from "../images/cpp.svg"
import PythonIcon from "../images/python.svg"
import FaunaIcon from "../images/fauna.svg"
import MongoIcon from "../images/mongodb.svg"
import FramerIcon from "../images/framer.svg"
import NextIcon from "../images/nextjs.svg"
import ContentfulIcon from "../images/contentful.svg"
import GraphQLIcon from "../images/graphql.svg"

import Downloadable from "../files/ResumePS-072422.pdf"


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
                    <nav className={`fixed flex px-5 pt-12 pb-6 w-full z-40 justify-between bg-white flex-row`}>
                        <div id="menu-button">
                        {sideBar ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                <button><BackIcon onClick={() => {
                                setSideBar((sideBar) => !sideBar)
                                }} />  </button>
                            </motion.div>) : <button> <BurgerIcon onClick={() => { setSideBar((sideBar) => !sideBar) }} /> </button>}
                        </div>
                        <motion.div 
                            id="download"
                            animate={{ scale: sideBar ? 0 : 1 }}
                            transition={{ duration: sideBar ? 0 : 0.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <a href={Downloadable} target="blank">
                                <DownloadIcon />
                            </a>
                        </motion.div>
                    </nav>
                    <div id="pop-in">
                        <Sidebar {...{ sideBar, setSideBar }} className="fixed z-50"/>
                    </div>
                    <motion.div 
                        id="main-container" 
                        className="flex flex-col w-auto pt-32 mx-7 md:mx-24 lg:mx-60 gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: sideBar ? 0 : 1, display: sideBar ? "none" : "flex" }}
                        exit={{ opacity: 0 }}
                        transition={{ style: "spring", bounce: 0, duration: 0.5, delay: sideBar ? 0 : 0.5 }}
                    >
                        <div id="name-and-info">
                            <h1 className="text-3xl font-bold">Patrick Sriprachandr</h1>
                            <h3 className="grid grid-cols-2 text-xl">
                                <div id="left">
                                    <p>San Diego, CA</p>
                                    <p>psriprac@gmail.com</p>
                                </div>
                                <div id="right" className="justify-self-end text-right">
                                    <p><a href="https://sriprachandr.netlify.app/" target="_blank" rel="noreferrer">https://sriprachandr.netlify.app</a></p>
                                    <p><a href="https://github.com/psriprac" target="_blank" rel="noreferrer">https://github.com/psriprac</a></p>
                                </div>
                            </h3>
                        </div>

                        <div id="education">
                            <h2 className="text-2xl font-bold border-b-2">Education</h2>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p>California State University, San Marcos</p>
                                <p className="text-right text-gray-400">May 2020</p>
                            </div>
                            <p className="text-base italic">Bachelor of Science, Computer Science</p>
                        </div>

                        <div id="dev-tech">
                            <h2 className="text-2xl font-bold border-b-2">Development Technologies</h2>
                            <ul className="grid grid-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-5 pt-2 items-center">
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">HTML</p><HTMLIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">CSS</p><CSSIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">Javascript</p><JSIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">GatsbyJS</p><GatsbyIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">NextJS</p><NextIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">React</p><ReactIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">TailwindCSS</p><TailwindIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">Framer Motion</p><FramerIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">GraphQL</p><GraphQLIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">FaunaDB</p><FaunaIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">MongoDB</p><MongoIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">Contentful</p><ContentfulIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">Netlify</p><NetlifyIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">GitHub</p><GitHubIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">VS Code</p><VSCIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">Figma</p><FigmaIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">C++</p><CPPIcon className="w-5 h-[26px]"/></li>
                                <li className="py-0"><p className="relative left-8 -top-1 -mb-7">Python</p><PythonIcon className="w-5 h-[26px]"/></li>
                            </ul>
                        </div>

                        <div id="projects">
                            <h2 className="text-2xl font-bold border-b-2">Projects</h2>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="text-base font-bold">Sample Blog</p>
                                <p className="text-right text-gray-400">July 2022</p>
                            </div>
                            <p className="italic">Solutions stack: NextJS, Contentful, GraphQL, Netlify, and TailwindCSS.</p>
                            <a href="https://sriprachandr-blog.netlify.app" target="_blank" rel="noreferrer">Preview: https://sriprachandr-blog.netlify.app</a><br />
                            <a href="https://github.com/psriprac/nextjs-blog" target="_blank" rel="noreferrer">GitHub: https://github.com/psriprac/nextjs-blog</a>
                            <ul className="list-disc pl-5">
                                <li>Designed a responsive sample blog with NextJS and TailwindCSS.</li>
                                <li>Implemented dynamic routing for blog posts.</li>
                                <li>Fetched content from Contentful headless CMS.</li>
                                <li>Queried data from content using GraphQL queries.</li>
                                <li>Styled with TailwindCSS framework.</li>
                                <li>Deployed to Netlify for CI/CD with GitHub and a build webhook to Contentful.</li>
                            </ul>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="text-base font-bold">Personal Website</p>
                                <p className="text-right text-gray-400">July 2022</p>
                            </div>
                            <p className="italic">Solutions stack: GatsbyJS, TailwindCSS, Netlify, and Framer Motion.</p>
                            <a href="https://sriprachandr.netlify.app" target="_blank" rel="noreferrer">Preview: https://sriprachandr.netlify.app</a><br />
                            <a href="https://github.com/psriprac/new-personal-website" target="_blank" rel="noreferrer">GitHub: https://github.com/psriprac/new-personal-website</a>
                            <ul className="list-disc pl-5">
                                <li>Developed a responsive personal professional website, with a pages for a resume and portfolio.</li>
                                <li>Designed and prototyped in Figma with a minimalist approach.</li>
                                <li>Animated components with the Framer Motion library for React.</li>
                                <li>Applied image optimization with the Gatsby Image library.</li>
                                <li>Created a contact form with full input validation with Formik.</li>
                                <li>Deployed to Netlify for CI/CD with GitHub.</li>
                            </ul>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="text-base font-bold">Tic-Tac-Toe</p>
                                <p className="text-right text-gray-400">May 2022</p>
                            </div>
                            <p className="italic">Solutions stack: HTML, CSS, and JavaScript.</p>
                            <a href="https://psriprac.github.io/tic-tac-toe" target="_blank" rel="noreferrer">Preview: https://psriprac.github.io/tic-tac-toe</a><br />
                            <a href="https://github.com/psriprac/tic-tac-toe" target="_blank" rel="noreferrer">GitHub: https://github.com/psriprac/tic-tac-toe</a>
                            <ul className="list-disc pl-5">
                                <li>Developed 2-player tic-tac-toe game with custom styling.</li>
                                <li>Implemented custom JavaScript rendering logic and DOM manipultion.</li>
                                <li>Created UI updates for win conditions.</li>
                                <li>Added reset functionality for replayability.</li>
                            </ul>
                        </div>
                        
                        <div id="experience">
                            <h2 className="text-2xl font-bold border-b-2">Experience</h2>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="text-base font-bold">Desktop Technician II</p>
                                <p className="text-right text-gray-400">May 2021 to Present</p>
                            </div>
                            <p className="italic">ICW Group</p>
                            <ul className="list-disc pl-5">
                                <li>Resolved level 1 and level 2 IT issues in an enterprise environment.</li>
                                <li>Configured, maintained, and supported virtual machines with VMWare Horizon VDI.</li>
                                <li>Implemented instant clone features for improved VDI deployment times.</li>
                                <li>Optimized, manages, and deployed base images for 200+ VMware VDI Desktops.</li>
                                <li>Created process standards for IT Hardware Asset Management.</li>
                                <li>Maintained enterprise Active Directory containing over 1200 members.</li>
                                <li>Implemented standard ticketing processes with ServiceNow.</li>
                                <li>Provisioned and deprovisioned computers and deployed hardware for on-site and remote end-users.</li>
                            </ul>

                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="font-bold">Advanced Repair Agent</p>
                                <p className="text-right text-gray-400">Jan 2018 to May 2021</p>
                            </div>
                            <p className="text-base italic">Geek Squad</p>
                            <ul className="list-disc pl-5">
                                <li>Performed diagnoses, troubleshooting, and repair of consumer electronics.</li>
                                <li>Apple Certified iOS Technician under Apple's Authorized Service Program.</li>
                                <li>Completed camera, battery, and screen repairs of Apple devices from iPhone 6 to iPhone 12.</li>
                                <li>Translated high level technical terminology to end users that have little to no technical experience.</li>
                                <li>Deployed program software, patches, and operating systems to desktops and laptops.</li>
                                <li>Managed ticket repair queue using proprietary ticketing system.</li>
                                <li>Provided clients and end-users multiple software and hardware repair solutions.</li>
                            </ul>

                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="font-bold">Assistant Supervisor</p>
                                <p className="text-right text-gray-400">Apr 2013 to Jan 2018</p>
                            </div>
                            <p className="text-base italic">SeaWorld San Diego</p>
                            <ul className="list-disc pl-5">
                                <li>Lead front gate ticket sales, guest service, parking, and tollbooth operations.</li>
                                <li>Completed fast paced and short-term daily objectives.</li>
                                <li>Managed a team of up to 200 to create excellent guest arrival experiences.</li>
                                <li>Resolved ticket admission and guest experience conflicts.</li>
                                <li>Revised and created standard operating procedures for front gate operations.</li>
                                <li>Prepared bi-weekly schedules for up to 200 team members.</li>
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
                                        className="bg-[#57f179] rounded-full p-7"
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