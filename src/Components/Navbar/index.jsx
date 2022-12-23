import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");
    const [activeIndex, setActiveIndex] = useState(0);
    const [navBG, setNavBG] = useState('navbarBackgroundInactive')

    const location = useLocation()
    const paths = [
    '/',
    '/packages',
    '/about',
    '/contact']

    useEffect(() => {
       setActiveIndex(paths.indexOf(location.pathname))
      
    })

    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }
    return (
        <div className={"headWrapper z-[1] h-[75px] md:h-[100px]" +navBG }>
            <div className="header h-full maxWidth">
                <NavLink to={'/'} >
                    <div className='flex justify-center items-center'>
                        <div className="logo">
                            <img className='w-[55px] lg:w-[70px]' src="assets/logo.png" alt="" />
                        </div>
                        {/* <div className='invisible lg:visible text-[25px] logotext'>
                            Sarcastic Cowboy
                        </div> */}
                    </div>
                </NavLink>
                <div className={active} >
                    <ul className='appleFont' >
                        <li onClick={navToggle}><NavLink  className={activeIndex == 0 ? 'active_item' : 'menu_item'} to={'/'} > Home </NavLink></li>
                        <li onClick={navToggle}><NavLink  className={activeIndex == 1 ? 'active_item ' : 'menu_item'} to={'/packages'} > Packages </NavLink></li>
                        <li onClick={navToggle}><NavLink  className={activeIndex == 2 ? 'active_item ' : 'menu_item'} to={'/about'} > About Us </NavLink></li>
                        <li onClick={navToggle}><NavLink  className={activeIndex === 3 ? 'active_item ' : 'menu_item'} to={'/contact'} > Contact </NavLink></li>
                    </ul>
                </div>
                <div onClick={navToggle} className={togglerIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </div>
        </div>
    )
}