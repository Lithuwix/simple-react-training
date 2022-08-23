import React from 'react'
import { Link } from 'react-router-dom'
import {PATH} from "./Pages";
import s from './Header.module.css'
import icon from './images/b.svg'


function Header() {
    return (
        <div className={s.header_navigation_container}>
            <Link className={s.nav_link} to={PATH.PRE_JUNIOR}>pre-junior </Link>
            <Link className={s.nav_link} to={PATH.JUNIOR}>junior </Link>
            <Link className={s.nav_link} to={PATH.JUNIOR_PLUS}>junior-plus </Link>
            <div className={s.navigation_icon}>
                <img className={s.navigation_icon_img} src={icon} alt="bullet"/>
            </div>
        </div>
    )
}

export default Header
