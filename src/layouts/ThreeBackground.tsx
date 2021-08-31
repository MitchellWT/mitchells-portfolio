import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/global.scss'

export default function ThreeBackground({children}) {
    return (
        <div className='pageContainer'>
            <div className='mainWithNav'>
                <Nav/>
                
                {children}
            </div>

            <Footer/>
        </div>
    )
}