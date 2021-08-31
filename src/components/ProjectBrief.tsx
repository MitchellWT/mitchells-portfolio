import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as ProjectBriefStyle from '../styles/projectbrief.module.scss'

export default function ProjectBrief({briefData, main=false}) {
    if (briefData) {
        return (
            <Link to={'/project/' + briefData.slug} className={`${ProjectBriefStyle.projectMainLink}
                                                                ${main ? '' : ProjectBriefStyle.projectSubLink}`}>
                <div className={ProjectBriefStyle.projectDiv}>
                    <GatsbyImage 
                        image={briefData.cover_image.localFile.childImageSharp.gatsbyImageData}
                        alt={briefData.cover_image.alternativeText} 
                        className={ProjectBriefStyle.projectImage}/>

                    <div className={ProjectBriefStyle.imageOverlay}></div>

                    <h3 className={ProjectBriefStyle.projectTitle}>{briefData.title}</h3> 
                </div>
            </Link>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}