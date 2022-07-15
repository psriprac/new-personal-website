import * as React from "react"
import BackIcon from "../images/Back-Icon.svg"
import HomeIcon from "../images/Home-Icon.svg"
import AboutIcon from "../images/About-Icon.svg"
import ProjectsIcon from "../images/Projects-Icon.svg"
import ResumeIcon from "../images/Resume-Icon.svg" 
import ContactIcon from "../images/Contact-Icon.svg"

const MenuPage = () => {
    return (
        <div id="container" className="bg-[#57f179] h-screen -mb-24">
            <div id="nav-page" className="grid grid-rows-6 h-full gap-8 mx-16 md:mx-24 lg:mx-60">
                <div id="back-button" className="flex flex-row self-end items-center gap-4">
{/*                     <BackIcon className=""/>
                    <h1 className="text-4xl">Back</h1> */}
                </div>
                <div id="main-nav" className="row-span-4 flex flex-col self-center gap-4">
                    <div id="home" className="flex flex-row items-center gap-4">
                        <HomeIcon />
                        <h1 className="text-4xl">Home</h1>
                    </div>
                    <div id="about" className="flex flex-row items-center gap-4">
                        <AboutIcon />
                        <h1 className="text-4xl">About</h1>
                    </div>
                    <div id="projects" className="flex flex-row items-center gap-4">
                        <ProjectsIcon />
                        <h1 className="text-4xl">Projects</h1>
                    </div>
                    <div id="resume" className="flex flex-row items-center gap-4">
                        <ResumeIcon />
                        <h1 className="text-4xl">Resume</h1>
                    </div>
                    <div id="contact" className="flex flex-row items-center gap-4">
                        <ContactIcon />
                        <h1 className="text-4xl">Contact</h1>
                    </div>
                </div>
                <div id="footer" className="">
                    <h4 className="pt-8">© 2022 Patrick Sriprachandr</h4>
                </div>
            </div>
        </div>
    )
}

export default MenuPage