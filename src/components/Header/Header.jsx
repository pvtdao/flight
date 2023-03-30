import React, { useEffect, useState } from 'react'
import UsFlag from '../../assets/icons/UsFlag'
import VnFlag from '../../assets/icons/VnFlag'
import "./header.css"
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useLocation } from 'react-router-dom';

const MENU_ITEM = [
    "Promotion",
    "Flight Schedule",
    "About Us",
    "Payment Guide",

]

function Header() {
    const [language, setLanguage] = useState("vi")
    const [isOpen, setIsOpen] = useState(false)
    const [shadow, setShadow] = useState(false)

    const { pathname } = useLocation()


    const transitionNavBar = () => {
        if (window.scrollY > 50) setShadow(true)
        else setShadow(false)
    }

    useEffect(() => {
        if (pathname === "/")
            window.addEventListener('scroll', transitionNavBar)

        else setShadow(true)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [pathname])

    function handleSetLanguage(value) {
        setLanguage(value)
    }

    function handleOpenMenu(open) {
        setIsOpen(open)
    }

    return (
        <header className={`header h-20 fixed w-full flex items-center z-50 ${shadow && "shadow text-white bg-primary"}`}>
            <div className="header-container container">
                <div className="logo">
                    <a href="/" className="text font-bold text-[22px] md:text-[28px]">Baycungban</a>
                    <div className="language flex gap-2">
                        <VnFlag onClick={() => handleSetLanguage("vi")} className={`cursor-pointer border-2 ${language === "vi" && "border-blue-800"} rounded-full`} />
                        <UsFlag onClick={() => handleSetLanguage("en")} className={`cursor-pointer border-2 ${language === "en" && "border-blue-800"} rounded-full`} />
                    </div>
                </div>
                <ul className={`menu ${isOpen ? "menu-active" : "menu-inactive"}`}>
                    {MENU_ITEM.map((item, idx) => {
                        return <li
                            className={`menu-item ${shadow && "lg:hover:bg-white/10"}`}
                            key={idx}
                            onClick={() => handleOpenMenu(false)}>
                            <a className={`py-[10px] px-4 ${shadow && "lg:text-white"}`} href={`/${item.toLowerCase()}`}>{item}</a>
                        </li>
                    })}
                </ul>
                <div>
                    <button className={`booking ${shadow && "text-primary bg-white"}`}>Booking now</button>
                </div>
                <div
                    className='cursor-pointer flex md:items-center z-10 lg:hidden'
                    onClick={() => handleOpenMenu(!isOpen)}>
                    {isOpen
                        ? <CgClose size="30px" color='white' />
                        : <CgMenuRight size="30px" />
                    }</div>
            </div>
        </header>
    )
}

export default Header