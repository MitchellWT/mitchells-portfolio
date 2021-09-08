import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import DefaultLayout from '../layouts/Default'
import * as ProjectStyle from '../styles/project.module.scss'

export default function Project({data}) {
    data = data.allStrapiProject.nodes[0]
    let title = 'MT | ' + data.title
    return (
        <DefaultLayout title={title} description=''
                       keywords='' isPost={true} index={false}>
            <GatsbyImage 
                image={data.cover_image.localFile.childImageSharp.gatsbyImageData}
                alt={data.cover_image.alternativeText}
                className={ProjectStyle.projectImage}/>

            <div className={ProjectStyle.projectTextContainer}>
                <h2 className='title'>{data.title}</h2>

                <Markdown 
                    children={data.body}
                    className={ProjectStyle.projectParagraph}/>
            </div>
        </DefaultLayout>
    )
}

export const PageQuery = graphql`
query ProjectQuery($slug: String) {
    allStrapiProject(sort: {fields: id, order: ASC}, filter: {slug: {eq: $slug}}) {
        nodes {
            title
            cover_image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(width: 1920, height: 1080)
                    }
                }
                alternativeText
            }
            body
        }
    }
}
`