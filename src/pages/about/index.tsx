import React from 'react'
import {graphql} from 'gatsby'
import DefaultLayout from '../../layouts/Default'
import * as AboutStyle from '../../styles/about.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function About({data}) {
    data = data.allStrapiAbout.nodes[0]
    let title = 'MT | About'
    return (
        <DefaultLayout title={title} description=''
                       keywords='' isPost={false} index={false}>
            <div>
                <h2 className='title'>ABOUT</h2>
                
                <div className={AboutStyle.floatingImageContainer}>
                    <div className={AboutStyle.floatingContainer}>
                        {data.frames.map((frame, index) => {
                            if (frame.alternativeText == 'red_frame') {
                                return (
                                    <GatsbyImage
                                        image={frame.localFile.childImageSharp.gatsbyImageData}
                                        alt={frame.alternativeText}
                                        className={AboutStyle.floatingLayerZero}
                                        key={index} />
                                )
                            } else if (frame.alternativeText == 'blue_frame') {
                                return (
                                    <GatsbyImage
                                        image={frame.localFile.childImageSharp.gatsbyImageData}
                                        alt={frame.alternativeText}
                                        className={AboutStyle.floatingLayerOne}
                                        key={index}/>
                                )
                            } else if (frame.alternativeText == 'green_frame') {
                                return (
                                    <GatsbyImage
                                        image={frame.localFile.childImageSharp.gatsbyImageData}
                                        alt={frame.alternativeText}
                                        className={AboutStyle.floatingLayerTwo}
                                        key={index}/>
                                )
                            } else if (frame.alternativeText == 'front_frame') {
                                return (
                                    <GatsbyImage
                                        image={frame.localFile.childImageSharp.gatsbyImageData}
                                        alt={frame.alternativeText}
                                        className={AboutStyle.floatingLayerImage}
                                        key={index}/>
                                )
                            } 
                        })}
                    </div>
                </div>

                <div className={AboutStyle.aboutTextContainer}>
                    <p className={AboutStyle.aboutParagraph}>
                        {data.body}
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
            frames {
                localFile {
                childImageSharp {
                    gatsbyImageData
                    }
                }
                alternativeText
            }
        }
    }
}
`