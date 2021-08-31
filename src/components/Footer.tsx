import React from 'react'
import {Link} from 'gatsby'
import * as FooterStyle from '../styles/footer.module.scss'

export default function Footer() {
    return (
        <footer className={FooterStyle.footerContainer}>
            <div className={FooterStyle.bottomText}>
                <div>
                    <h1>
                        <a href='mailto:mitchell444999@protonmail.com'>mitchell444999@protonmail.com</a>
                    </h1>
                </div>

                <div className={FooterStyle.footerDivider}></div>

                <div>
                    <h1>
                        <a href="https://github.com/MitchellWT">GITHUB</a>
                    </h1>
                </div>
            </div>
        </footer>
    )
}