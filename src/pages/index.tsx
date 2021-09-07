import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import DefaultLayout from '../layouts/Default'
import * as IndexStyle from '../styles/index.module.scss'

export default function Index({data}) {
    data = data.allStrapiIndex.nodes[0]
    return (
        <DefaultLayout title="MT | Index" description="Mitchell Tsutsulis's portfolio website. This website showcases some of the project developed by Mitchell, using a variety of technologies." 
                       keywords="Mitchell Tsutsulis, portfolio, software, technology" isPost={false}>
            <div>
                <h2 className={`${IndexStyle.name} title`}>MITCHELL TSUTSULIS</h2>
                
                <GatsbyImage
                    image={data.profile.localFile.childImageSharp.gatsbyImageData}
                    alt={data.profile.alternativeText}
                    className={IndexStyle.image}/>

                <h2 className={`${IndexStyle.sub} title`}>SOFTWARE DEVELOPER</h2>
            </div>
        </DefaultLayout>
    )
}

export const pageQuery = graphql`
query IndexQuery {
    allStrapiIndex(limit: 1) {
        nodes {
            profile {
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