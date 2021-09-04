import { graphql } from 'gatsby'
import React from 'react'
import ProjectContainer from '../../components/ProjectContainer'
import DefaultLayout from '../../layouts/Default'

export default function Projects({data}) {
    let isLeft = false;

    return (
        <DefaultLayout>
            <div>
                <h2 className='title'>PROJECTS</h2>
            </div>

            <div>
                {data.allStrapiProject.nodes.map((projectBriefs, index) => {
                    if (index % 3 == 0 || index == 0) {
                        isLeft = !isLeft

                        let projectBriefThreeCount = []
                        for (let i = 0; i < 3; i++) {
                            projectBriefThreeCount[i] = data.allStrapiProject.nodes[index + i]
                        }

                        return (
                            <ProjectContainer 
                                projectBriefs={projectBriefThreeCount} 
                                left={isLeft}
                                key={index}/>
                        )
                    }
                })}
                {data.allStrapiProject.nodes.length != 0 ? <div className='subtitle'>Nothing here...?</div> : ''}
            </div>
        </DefaultLayout>
    )
}

export const PageQuery = graphql`
query ProjectBriefQuery {
    allStrapiProject(sort: {fields: id, order: ASC}) {
        nodes {
            cover_image {
                localFile {
                    childImageSharp {
                        gatsbyImageData(width: 960, height: 540)
                    }
                }
                alternativeText
            }
            slug
            title
        }
    }
}  
`