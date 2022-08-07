import * as React from "react"

const NameAndInfo = () => {
    return(
        <div id="name-and-info">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-l">
                <div id="left">
                    <h1 className="text-3xl font-bold">Patrick Sriprachandr</h1>
                    <h3 className="text-xl italic">
                            <p>Systems Administrator</p>
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
                <div id="container" className="flex flex-col w-auto mx-7 md:mx-24 lg:mx-60 gap-1">
                    <NameAndInfo />
                        <div id="dev-tech">
                            <h2 className="text-2xl font-bold border-b-2">Skills</h2>
                            <ul className="grid grid-row grid-cols-2 pl-5 pt-2 gap-x-6 list-disc">
                                <li>ServiceNow Ticketing</li>
                                <li>Active Directory</li>
                                <li>Windows 10 Administration</li>
                                <li>Windows Server 2016 Administration</li>
                                <li>VMware Horizon and vSphere Administration</li>
                                <li>Hardware Asset Management</li>
                                <li>Intune Mobile Device Management</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>NoSQL</li>
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