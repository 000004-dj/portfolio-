import React, {useState} from "react";
import s from "./Project.module.scss";
import containerStyle from "../../../../containerStyle.module.scss"
import {projectsData} from "utils/projectsData";
import Modal from "Components/additionaly-components/BaseModal/BaseModal";
import {ProjectPage} from "Components/ProjectPage/ProjectPage";

const Fade = require("react-reveal/Fade");


export const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (projectId: string) => {
        sessionStorage.setItem('projectId', projectId)
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        sessionStorage.clear()
        setIsModalOpen(false);
    };

    const getProject = () => {
        const projectId = sessionStorage.getItem('projectId')
        if(projectId === "0_1"){
            return projectsData[0]
        }else if(projectId === "0_3"){
            return projectsData[1]
        }else if(projectId === "0_4"){
            return projectsData[2]
        }else if(projectId === "0_5"){
            return projectsData[3]
        }else if(projectId === "0_6"){
            return projectsData[4]
        }
    }

    return (
        <div className={`${containerStyle.flexContainer} ${s.blockContainer}`}>
            {projectsData.map(i => {
                return <Fade bottom key={i.title}>
                    <div className={s.cardContainer}>
                        <p className={s.title}>{i.title}</p>
                        <p className={s.description}>{i.description}</p>
                        <div
                            className={s.image}
                            style={{
                                backgroundImage: `url(${i.image})`
                            }}
                            onClick={() => handleOpenModal(i.projectId)}
                        ></div>

                    </div>

                </Fade>
            })}
            {
                <Modal children={<ProjectPage
                    project={getProject()}/>}
                       isOpen={isModalOpen}
                       onClose={handleCloseModal}
                />
            }
        </div>
    )
}