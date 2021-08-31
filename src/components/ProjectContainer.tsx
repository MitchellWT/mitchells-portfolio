import React from 'react'
import ProjectBrief from './ProjectBrief'
import * as ProjectContainerStyle from '../styles/projectcontainer.module.scss'

export default function ProjectContainer({projectBriefs, left}) {
    return (
        <div className={ProjectContainerStyle.projectContainer}>
            <div className={`${left ? ProjectContainerStyle.leftProject : ProjectContainerStyle.rightProject}`}>
                <ProjectBrief briefData={projectBriefs[0]} main={true}/>
            </div>

            <div className={left ? ProjectContainerStyle.dividerLeft : ProjectContainerStyle.dividerRight}></div>

            <div className={`${left ? ProjectContainerStyle.rightProject : ProjectContainerStyle.leftProject}`}>
                <ProjectBrief briefData={projectBriefs[1]}/>
                <div className={ProjectContainerStyle.subDivider}></div>
                <ProjectBrief briefData={projectBriefs[2]}/>
            </div>
        </div>
    )
}