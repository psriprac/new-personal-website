import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link } from "gatsby"
import MenuPage from "./menu"
import BackIcon from "../images/Back-Icon.svg"
import BurgerIcon from "../images/Burger.svg"
import Card from "../components/card"
import { useStaticQuery, graphql } from "gatsby"

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

const Projects = () => {
    const [sideBar, setSideBar] = useState(false)
    const [scale] = useState(0)
    const [startAnim, setStartAnim] = useState(true)
    
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(filter: {relativeDirectory: {eq: "png"}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `)
    const imgs = data.allFile.edges

    return (
        <AnimatePresence>
            <motion.div 
                id="view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div id="container">
                    <nav className={`fixed flex px-5 pt-12 pb-6 z-40 w-full bg-white flex-row`}>
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
                        id="main-container" 
                        className="flex flex-col pt-32 mx-7 md:mx-24 lg:mx-60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: sideBar ? 0 : 1, display: sideBar ? "none" : "flex" }}
                        exit={{ opacity: 0 }}
                        transition={{ style: "spring", bounce: 0, duration: 0.5, delay: sideBar ? 0 : 0.5 }}
                    >
                        <div>
                            <h1 className="text-5xl py-8">Projects</h1>
                            
                            <div id="main-content" className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
                                <Card 
                                    projectName="Tic-Tac-Toe" 
                                    prevImg={imgs[2].node.childImageSharp.fluid}
                                    alt="Tic-Tac-Toe"
                                    description="Simple tic-tac-toe game made with Plain HTML, CSS, and JavaScript."
                                    tags="#HTML #CSS #JavaScript"
                                    githubLink="https://github.com/psriprac/tic-tac-toe"
                                    previewLink="https://psriprac.github.io/tic-tac-toe/"
                                    />
                                <Card 
                                    projectName="Personal Website" 
                                    prevImg={imgs[1].node.childImageSharp.fluid}
                                    alt="Personal Website"
                                    description="This website! Built with GatsbyJS, TailwindCSS, and Framer Motion."
                                    tags="#GatsbyJS #TailwindCSS #Framer-Motion"
                                    githubLink="https://github.com/psriprac/new-personal-website"
                                    />
                                <Card 
                                    projectName="NextJS Blog" 
                                    prevImg={imgs[0].node.childImageSharp.fluid}
                                    alt="NextJS Blog"
                                    description="A sample blog made with NextJS fetching data from Contenful with a GraphQL API."
                                    tags="#NextJS #TailwindCSS #Contentful #GraphQL"
                                    githubLink="https://github.com/psriprac/nextjs-blog"
                                    previewLink="https://sriprachandr-blog.netlify.app/"
                                    />
                            </div>
                          
                            <motion.div 
                                id="nextpage" 
                                className="flex flex-row items-center pt-3 pb-20 gap-4"
                                animate={{ scale: [scale, scale + 1.1, scale + 1] }}
                                transition={{ duration: 0.5, delay: startAnim ? 0.8 : 0 }} onClick={() => setStartAnim(false)}
                            >
                                <Link to="/resume">
                                    <motion.button 
                                        className="bg-[#57f179] rounded-full p-7"
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <h1 className="text-2xl">Resume</h1>
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Projects