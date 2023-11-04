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
        return {
            "0_1": projectsData[0],
            "0_2": projectsData[1],
            "0_3": projectsData[2],
            "0_4": projectsData[3],
            "0_5": projectsData[4],
            "0_6": projectsData[5],
        }[projectId || "0_1"]
    }

    let currentProject = getProject()

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
                <Modal children={<ProjectPage title={currentProject?.title}
                                              projectDescription={currentProject?.projectDescription}
                                              photos={currentProject?.photos}
                                              projectURL={currentProject?.projectURL}/>}
                       isOpen={isModalOpen}
                       onClose={handleCloseModal}
                />
            }
        </div>
    )
}