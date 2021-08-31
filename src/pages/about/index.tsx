import React from 'react'
import {graphql} from 'gatsby'
import DefaultLayout from '../../layouts/Default'
import * as AboutStyle from '../../styles/about.module.scss'

export default function About({data}) {
    return (
        <DefaultLayout>
            <div>
                <h2>ABOUT</h2>
                
                <div className={AboutStyle.floatingImageContainer}>
                    <div className={AboutStyle.floatingContainer}>
                        <div className={AboutStyle.floatingLayerZero}>
                        </div>

                        <div className={AboutStyle.floatingLayerOne}>
                        </div>

                        <div className={AboutStyle.floatingLayerTwo}>
                        </div>

                        <div className={AboutStyle.floatingLayerImage}>
                        </div>
                    </div>
                </div>

                <div className={AboutStyle.aboutTextContainer}>
                    <p className={AboutStyle.aboutParagraph}>
                        {data.allStrapiAbout.nodes[0].body}
                    </p> 
                </div>
            </div>
        </DefaultLayout>
    )
}

export const pageQuery = graphql`
query AboutQuery {
    allStrapiAbout(limit: 1) {
        nodes {
            body
        }
    }
}  
`