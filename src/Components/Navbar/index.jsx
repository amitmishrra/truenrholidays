import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");
    const [activeIndex, setActiveIndex] = useState(0);
    const [navBG, setNavBG] = useState('navbarBackgroundInactive')
    const [hideoptions, setHideOptions] = useState("hidden")
    const [activeArrow, setActiveArrow] = useState("▼")

    const location = useLocation()
    const paths = [
    '/',
    '/domesticPackages',
    '/internationalPackages',
    '/about',
    '/contact']

    useEffect(() => {
       setActiveIndex(paths.indexOf(location.pathname))
      
    })

    const navToggle = () => {
        window.scrollTo(0, 0);

        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }

    const packageToggle= ()=>{
        activeArrow ==  "▼" ?  setActiveArrow("▲") : setActiveArrow("▼");
        hideoptions =="hidden" ? setHideOptions("show ml-4") : setHideOptions("hidden ml-4");
    }


    return (
        <div className={"headWrapper z-[1]" +navBG }>
            <div className="header maxWidth">
                <NavLink to={'/'} >
                    <div className='flex justify-center items-center'>
                        <div className="logo">
                            <img className='w-[70px] lg:w-[120px]' src="/assets/logo.png" alt="" />
                        </div>
                    </div>
                </NavLink>
                <div className={active} >
                    <ul className='textFont' >
                        <li onClick={navToggle}><NavLink  className={activeIndex == 0 ? 'active_item' : 'menu_item'} to={'/'} > Home </NavLink></li>
                        <li onClick={packageToggle} className={'menu_item'} to={''} > Packages<span>{activeArrow}</span> </li>
                        <li className={activeArrow !=  "▲" ? hideoptions : null} onClick={navToggle}><NavLink  className={activeIndex == 1  ? 'active_item '  : 'menu_item ' } to={'/domesticPackages'} >&#9679; Domestic </NavLink></li>
                        <li className={activeArrow !=  "▲" ? hideoptions : null} onClick={navToggle}><NavLink  className={activeIndex == 2 ? 'active_item ' : 'menu_item ' } to={'/internationalPackages'} >&#9679; International </NavLink></li>
                        <li onClick={navToggle}><NavLink  className={activeIndex == 3 ? 'active_item ' : 'menu_item'} to={'/about'} > About Us </NavLink></li>
                        <li onClick={navToggle}><NavLink  className={activeIndex === 4 ? 'active_item ' : 'menu_item'} to={'/contact'} > Contact </NavLink></li>
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