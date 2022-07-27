import * as React from "react"

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

const NameAndInfo = () => {
    return(
        <div id="name-and-info">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-l">
                <div id="left">
                    <h1 className="text-3xl font-bold">Patrick Sriprachandr</h1>
                    <h3 className="text-xl italic">
                            <p>Web Developer</p>
                            <p>San Diego, CA</p>
                        </h3>
                </div>
                <div id="right" className="justify-self-end text-right lg:text-right lg:justify-self-end">
                    <p>(619) 733-7222</p>
                    <p>psriprac@gmail.com</p>
                    <p><a href="https://sriprachandr.netlify.app/" target="_blank" rel="noreferrer">https://sriprachandr.netlify.app</a></p>
                    <p><a href="https://github.com/psriprac" target="_blank" rel="noreferrer">https://github.com/psriprac</a></p>
                </div>
            </div>
        </div>
    )
}

const ResumeOnly = () => {
    return (
                <div id="container" className="flex flex-col w-auto mx-7 md:mx-24 lg:mx-60 gap-5">
                    <NameAndInfo />
                        <div id="dev-tech">
                            <h2 className="text-2xl font-bold border-b-2">Development Technologies</h2>
                            <ul className="grid grid-row grid-cols-4 md:grid-cols-3 lg:grid-cols-4 pl-0 pt-2 items-center gap-x-6">
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
                                <li>Gained understanding of how to build dynamic and fast static websites while sourcing data from a headless content management system.</li>
                                <li>Implemented dynamic routing from NextJS that creates a unique page per blog post at build time.</li>
                                <li>Integrated Contentful as a decoupled data source to choose any performant front end.</li>
                                <li>Utilized Contentful's GraphQL API endpoint to only query for necessary data.</li>
                                <li>Built style from TailwindCSS class declarations for easy component creation.</li>
                                <li>Used Netlify's continuous deployment pipeline that triggers a deployment whenever there is a change to the repository on GitHub or the data from Contentful.</li>
                            </ul>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="text-base font-bold">Personal Website</p>
                                <p className="text-right text-gray-400">July 2022</p>
                            </div>
                            <p className="italic">Solutions stack: GatsbyJS, TailwindCSS, Netlify, and Framer Motion.</p>
                            <a href="https://sriprachandr.netlify.app" target="_blank" rel="noreferrer">Preview: https://sriprachandr.netlify.app</a><br />
                            <a href="https://github.com/psriprac/new-personal-website" target="_blank" rel="noreferrer">GitHub: https://github.com/psriprac/new-personal-website</a>
                            <ul className="list-disc pl-5">
                                <li>Learned the end to end process of building a static website.</li>
                                <li>Designed and developed a responsive personal professional website, with pages for a resume and portfolio to host my work.</li>
                                <li>Created a wire frame in Figma to outline the basic layout of the website.</li>
                                <li>Animated components with the Framer Motion library for React to promote interactivity.</li>
                                <li>Used the Gatsby Image Library to optimize images at different screen sizes.</li>
                                <li>Implemented Formik as a full client side input validation solution on the Contact page.</li>
                            </ul>
                        </div>

                        <div className="pt-14"></div>

                        <NameAndInfo />
                        
                        <div id="experience">
                            <h2 className="text-2xl font-bold border-b-2">Experience</h2>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="text-base font-bold">Desktop Technician II</p>
                                <p className="text-right text-gray-400">May 2021 to Present</p>
                            </div>
                            <p className="italic">ICW Group</p>
                            <ul className="list-disc pl-5">
                                <li>Resolved level 1 and level 2 IT issues in an enterprise environment to improve resolution rates by 8% in the first two months of the role.</li>
                                <li>Configured, maintained, and supported virtual machines with VMWare Horizon VDI.</li>
                                <li>Implemented instant clone features for improved deployment workflows for zero downtime and eliminating the need for maintenance windows.</li>
                                <li>Optimized, managed, and deployed base images for 200+ VMware VDI Desktops to reduce the average log on time by 1 minute.</li>
                                <li>Created process standards for IT Hardware Asset Management.</li>
                                <li>Maintained enterprise Active Directory containing over 1200 members.</li>
                                <li>Provisioned and deprovisioned computers and deployed hardware for on-site and remote end-users.</li>
                            </ul>

                            <div className="flex flex-row text-base justify-between pt-2">
                                <p className="font-bold">Advanced Repair Agent</p>
                                <p className="text-right text-gray-400">Jan 2018 to May 2021</p>
                            </div>
                            <p className="text-base italic">Geek Squad</p>
                            <ul className="list-disc pl-5">
                                <li>Performed software and hardware diagnoses, troubleshooting, and repair of consumer electronics.</li>
                                <li>Contributed to a Geek Squad Net Promoter Score of 85 and above within the first three months in the role.</li>
                                <li>Completed same-day camera, battery, and screen repairs of iPhone 6 to iPhone 12.</li>
                                <li>Translated high level technical terminology to end users that have little technical experience.</li>
                                <li>Maintained a 2 to 3 day turn around time for the completion of repairs.</li>
                            </ul>
                        </div>

                        <div id="education">
                            <h2 className="text-2xl font-bold border-b-2">Education</h2>
                            <div className="flex flex-row text-base justify-between pt-2">
                                <p>California State University, San Marcos</p>
                                <p className="text-right text-gray-400">May 2020</p>
                            </div>
                            <p className="text-base italic">Bachelor of Science, Computer Science</p>
                        </div>
                </div>      
    )
}

export default ResumeOnly