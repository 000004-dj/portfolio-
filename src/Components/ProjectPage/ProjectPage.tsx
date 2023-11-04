import React from 'react'
import s from './ProjectPage.module.scss'
import {Link} from "react-router-dom";

type ProjectType = {
        image?: { [p: string]: string },
        title?: string,
        projectDescription?: string,
        photos?: { [p: string]: string }[],
        projectURL?: string
    }


export const ProjectPage = ({title, photos, projectDescription, projectURL}: ProjectType) => {
    return (
        <div className={s.projectPageBlock}>
            <p className={s.projectName}>{title}</p>
            <div className={s.images}>
                {
                    photos?.map((i) => {
                        return <div className={s.itemImage} key={title}>
                            <img src={i.toString()} alt="image not found"/>
                        </div>
                    })
                }
            </div>
            <div className={s.infoBlock}>
                <span style={{display: "block"}}>
                    {projectDescription}
                </span>
                <div>
                    <Link to={projectURL || ""} className={s.link}>Go to Project</Link>
                </div>


            </div>


        </div>
    )
}