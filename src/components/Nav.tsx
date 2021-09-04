import React from 'react'
import {Link} from 'gatsby'
import HandburgerNav from './HandburgerNav'
import * as NavStyle from '../styles/nav.module.scss'

export default function Nav() {
    return (
        <nav className={NavStyle.navigation}>
            <div>
                <h1 className={NavStyle.navItem}>
                    <Link to='/' activeClassName={NavStyle.activeLink}>INDEX</Link>
                </h1>
            </div>

            <div className={NavStyle.rightNavigation}>
                <h1 className={NavStyle.navItem}>
                    <Link to='/about' activeClassName={NavStyle.activeLink}>ABOUT</Link>
                </h1>
                <h1 className={NavStyle.navItem}>
                    <Link to='/blog' activeClassName={NavStyle.activeLink}>BLOG</Link>
                </h1>
                <h1 className={NavStyle.navItem}>
                    <Link to='/projects' activeClassName={NavStyle.activeLink}>PROJECTS</Link>
                </h1>
                <h1 className={NavStyle.navItem}>
                    <Link to='/contact' activeClassName={NavStyle.activeLink}>CONTACT</Link>
                </h1>
            </div>

            <HandburgerNav/>
        </nav>
    )
} 