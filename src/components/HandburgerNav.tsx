import React, {useState} from 'react'
import {Link} from 'gatsby'
import * as NavStyle from '../styles/nav.module.scss'

export default function HandburgerNav() {
    const [handburgerState, setHandburgerState] = useState(false)
    let contentStyle = {}
    handburgerState ? contentStyle = {display: 'flex'} 
                    : contentStyle = {display: 'none'}

    return ( 
        <nav className={NavStyle.handburgerNavigation}>
            <div>
                <h1 className={`${NavStyle.handburgerOpen} ${NavStyle.navItem}`} onClick={() => setHandburgerState(!handburgerState)}>MENU</h1>
            </div>

            <div className={NavStyle.handburgerContent} style={contentStyle}>
                <div className={NavStyle.handburgerBun}>
                    <h1 className={NavStyle.navItem}>
                        <Link to='/' activeClassName={NavStyle.handburgerActiveLink}>INDEX</Link>
                    </h1>

                    <h1 className={`${NavStyle.handburgerClose} ${NavStyle.navItem}`} 
                        onClick={() => setHandburgerState(!handburgerState)}>CLOSE</h1>
                </div>
                
                <div className={NavStyle.handburgerMeat}>
                    <h1 className={NavStyle.navItem}>
                        <Link to='/about' className={NavStyle.handburgerLinks} 
                            activeClassName={NavStyle.handburgerActiveLink}>ABOUT</Link>
                    </h1>
                    <h1 className={NavStyle.navItem}>
                        <Link to='/blog' className={NavStyle.handburgerLinks} 
                            activeClassName={NavStyle.handburgerActiveLink}>BLOG</Link>
                    </h1>
                    <h1 className={NavStyle.navItem}>
                        <Link to='/projects' className={NavStyle.handburgerLinks} 
                            activeClassName={NavStyle.handburgerActiveLink}>PROJECTS</Link>
                    </h1>
                    <h1 className={NavStyle.navItem}>
                        <Link to='/contact' className={NavStyle.handburgerLinks} 
                            activeClassName={NavStyle.handburgerActiveLink}>CONTACT</Link>
                    </h1>
                </div>
            </div>
        </nav>
    )
}