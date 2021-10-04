import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import DefaultLayout from '../layouts/Default'
import * as ProjectStyle from '../styles/project.module.scss'

export default function Project({data}) {
    data = data.allStrapiProject.nodes[0]
    let title = 'MT | ' + data.title
    let additionalImage = (<React.Fragment/>)
    if (data.additional_image != undefined) {
        additionalImage = (
            <GatsbyImage
                image={data.additional_image.localFile.childImageSharp.gatsbyImageData}
                alt={data.additional_image.alternativeText}
                className={ProjectStyle.additionalImage}/>
            )
    }

    return (
        <DefaultLayout title={title} description=''
                       keywords='' isPost={true} index={false}>
            <GatsbyImage 
                image={data.cover_image.localFile.childImageSharp.gatsbyImageData}
                alt={data.cover_image.alternativeText}
                className={ProjectStyle.projectImage}/>

            <div className={ProjectStyle.projectTextContainer}>
                <h2 className='title'>{data.title}</h2>

                <div>
                    <p className={ProjectStyle.techHeading}>Technology Used</p>
                    <div className={ProjectStyle.techContainer}>
                        {data.tech_used.map((tech) => {
                            return (
                                <GatsbyImage
                                    image={tech.localFile.childImageSharp.gatsbyImageData}
                                    alt={tech.alternativeText}
                                    class={ProjectStyle.techIcon}/>
                            )
                        })}
                    </div>
                </div>

                <Markdown 
                    children={data.body}
                    className={ProjectStyle.projectParagraph}/>

                {additionalImage}
            </div>
        </DefaultLayout>
    )
}

export const PageQuery = graphql`
query ProjectQuery($slug: String) {
    allStrapiProject(sort: {fields: id, order: ASC}, filter: {slug: {eq: $slug}}) {
        nodes {
            title
            body
            tech_used {
                localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 100, height: 85)
                    }
                }
                alternativeText
            }
            cover_image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 100, width: 1920, height: 1080)
                    }
                }
                alternativeText
            }
            additional_image {
                alternativeText
                localFile {
                    childImageSharp {
                        gatsbyImageData(quality: 100)
                    }
                }
            }
        }
    }
}  
`