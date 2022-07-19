import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Link } from "gatsby"
import { useFormik } from "formik"

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

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const Contact = () => {
    const [sideBar, setSideBar] = useState(false)
    const [scale] = useState(0)
    const [startAnim, setStartAnim] = useState(true)

    const validate = (values) => {
        const errors = {}

        if (!values.name) { errors.name = 'Required' }
        else if (values.name.length < 2) { errors.name = 'Must be 2 characters or more' }

        if (!values.email) { errors.email = 'Required' }
        else if (values.email.length < 2) { errors.email = 'Must be 2 characters or more' }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        if (!values.msg) { errors.msg = 'Required' }
        else if (values.msg.length > 999) { errors.msg = 'Max limit of 999 characters' }

        return errors
    }

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit: (values, actions) => {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contactForm", ...values })
            })
            .then(() => {
                alert('Success');
                actions.resetForm()
            })
            .catch(() => {
            alert('Error');
            })
            .finally(() => actions.setSubmitting(false))
        }
    });

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
                        <div className="flex flex-col">
                            <h1 className="text-5xl py-8">I'd love to hear from you</h1>

                            <form name="contactForm" method="post" data-netlify="true">
                                <ul>
                                    <input type="hidden" name="form-name" value="contactForm" />  
                                    <li className="flex flex-col py-1">
                                        <label htmlFor="name" className="text-2xl flex flex-row justify-between">
                                            Name 
                                            {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-base">{formik.errors.name}</div> : null}
                                        </label>
                                        <input 
                                            onChange={formik.handleChange} 
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name} 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            className="bg-slate-200 p-2 rounded"/>
                                    </li>
                                    <li className="flex flex-col py-1">
                                        <label htmlFor="email" className="text-2xl flex flex-row justify-between">
                                            Email 
                                            {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-base">{formik.errors.email}</div> : null}
                                        </label>
                                        <input 
                                            onChange={formik.handleChange} 
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email} 
                                            type="text" 
                                            id="email" 
                                            name="email" 
                                            className="bg-slate-200 p-2 rounded"/>
                                    </li>
                                    <li className="flex flex-col py-1">
                                        <label htmlFor="msg" className="text-2xl flex flex-row justify-between">
                                            Message 
                                            {formik.touched.msg && formik.errors.msg ? <div className="text-red-500 text-base">{formik.errors.msg}</div> : null}
                                        </label>
                                        <textarea 
                                            onChange={formik.handleChange} 
                                            onBlur={formik.handleBlur}
                                            value={formik.values.msg} 
                                            id="msg" 
                                            name="msg" 
                                            className="bg-slate-200 p-2 rounded resize-none h-36"/>
                                    </li>
                                    <li className="flex flex-row justify-between items-center py-1">
                                        <Link to="/">
                                            <motion.div 
                                                id="nextpage" 
                                                className="flex flex-row items-center gap-4"
                                                animate={{ scale: [scale, scale + 1.1, scale + 1] }}
                                                transition={{ duration: 0.5, delay: startAnim ? 2 : 0 }} onClick={() => setStartAnim(false)}
                                            >
                                                <motion.button 
                                                    className="bg-[#57f179] rounded-full p-7"
                                                    whileTap={{ scale: 0.9 }}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <h1 className="text-2xl">Back to Home</h1>
                                                </motion.button>
                                                {/* <BackIcon style={{transform: "rotate(0deg)"}}/> */}
                                            </motion.div>
                                        </Link>
                                        <motion.div
                                            whileTap={{ scale: 0.9 }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {
                                                formik.isValid && formik.dirty ? (
                                                <motion.button 
                                                    type="submit" 
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}>
                                                    <ActionIcon style={{transform: "rotate(270deg)"}}/>
                                                </motion.button>
                                                ) : <button 
                                                        aria-label="fill-form" 
                                                        disabled={!(formik.isValid && formik.dirty)}>
                                                            <ActionIcon style={{ opacity: 0.25, transform: "rotate(270deg)" }}/>
                                                    </button>
                                            }
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