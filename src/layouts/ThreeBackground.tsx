import React from 'react'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import '../styles/global.scss'

export default function ThreeBackground({children, title, description, keywords, isPost}) {
    return (
        <div className='pageContainer'>
            <SEO title={title} description={description} keywords={keywords} isPost={isPost}/>

            <div className='mainWithNav'>
                <Nav/>
                
                {children}
            </div>

            <Footer/>
        </div>
    )
}