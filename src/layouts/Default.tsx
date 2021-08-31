import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/global.scss'

export default function DefaultLayout({children}) {
    return (
        <div className='pageContainer'>
            <div className='mainWithNav'>
                    <Nav/>

                <div className='main'>
                    {children}
                </div>
            </div>

            <Footer/>
        </div>
    )
}