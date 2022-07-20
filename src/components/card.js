import * as React from "react"
import Img from "gatsby-image"
import { AnimatePresence, motion } from "framer-motion"

const Card = (props) => {
    return (
        <AnimatePresence>
            <div id="container" className="max-w-sm h-auto drop-shadow-md rounded-lg overflow-hidden bg-white">
                <div id="card-content">
                    <div id="picture" className="grid bg-gray-400 h-[300px] overflow-hidden">
                        <Img fluid={props.prevImg} alt={props.alt} className="object-none"/>
                    </div>
                    <div id="title">
                        <p className="text-lg font-bold p-2">{props.projectName}</p>
                    </div>
                    <div id="description">
                        <p className="text-base p-2">{props.description}</p>
                    </div>
                    <div id="tags">
                        <p className="text-base p-2 text-gray-400">{props.tags}</p>
                    </div>
                    <div id="buttons" className="grid grid-cols-2 items-center gap-2 p-2">
                        {props.githubLink ? 
                            <motion.button whileHover={{ opacity: 0.5, scale: 0.9 }} whileTap={{ scale: 0.9 }} className="rounded-lg bg-[#57f179] py-2">
                                <a href={props.githubLink} target="blank">GitHub</a>
                            </motion.button>
                        : null}
                        {props.previewLink ?
                            <motion.button whileHover={{ opacity: 0.5, scale: 0.9 }} whileTap={{ scale: 0.8 }} className="rounded-lg bg-[#57f179] py-2">
                                <a href={props.previewLink} target="blank">Preview</a>
                            </motion.button>
                        : null}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default Card