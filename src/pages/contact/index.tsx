import React, {useRef} from 'react'
import NameDisk from '../../components/NameDisk'
import ThreeBackground from '../../layouts/ThreeBackground'
import * as ContactStyle from '../../styles/contact.module.scss'

export default function Contact() {
    const pageContainer = useRef()

    return (
        <ThreeBackground>
            <NameDisk/>

            <div className='main'>
                <div className={ContactStyle.top}>
                    <h2 className='title'>CONTACT</h2>

                    <div className={ContactStyle.divider}>
                        <p>01001000</p>
                        <p>01101001</p>
                    </div>
                </div>

                <div className={ContactStyle.bottom}>
                    <p>Want to work together?</p>
                    <p>Email me at <a href="mailto:mitchell444999@protonmail.com" className={ContactStyle.emailLink}>mitchell444999@protonmail.com</a>.</p>
                </div>
            </div>
        </ThreeBackground>
    )
}
