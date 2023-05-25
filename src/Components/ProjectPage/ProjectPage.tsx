import React from 'react'
import s from './ProjectPage.module.scss'
import {Link} from "react-router-dom";

type ProjectType = {
    photos: any[] | null
    title: string | null
    projectId: string
    projectURL: string
    projectDescription: string | null
}

type PropsType = {
    project: any
}


export const ProjectPage = (props: PropsType) => {
    const {title, photos, projectDescription, projectURL}: ProjectType = props.project
    return(
        <div className={s.projectPageBlock}>
            <p className={s.projectName}>{title}</p>
            <div className={s.images}>
                {
                    photos?.map((i: string | undefined, index: React.Key | null | undefined) => {
                     return <div className={s.itemImage} key={index}>
                         <img src={i} alt="image not found"/>
                     </div>
                    })
                }
            </div>
            <div className={s.infoBlock}>
                <span style={{display: "block"}}>
                    {projectDescription}
                </span>
                <div>
                    <Link to={projectURL} className={s.link}>Go to GitHub</Link>
                </div>


            </div>


        </div>
    )
}