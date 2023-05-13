import React from "react";
import s from "./SkillsPage.module.scss"
import containerStyle from "../../../containerStyle.module.scss"
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {useNavigate} from "react-router-dom";
import {skillsData} from "utils/skillsData";
import RightArrow from "../../../assets/images/right-arrows.png"
const Fade = require("react-reveal/Fade");



export const SkillPage = () => {

    const navigate = useNavigate()
    const goToLink = (link: string) => {
        navigate(`//${link}`)
    }

    return (
        <div className={s.SkillPage} id={"skills"}>
            <TitleText
                title={"What i can"}
                smallTitle={"SKILLS"}
            />

            <div className={`${containerStyle.flexContainer} ${s.blockContainer}`}>
                {skillsData.map(i => {
                    return <Fade bottom key={i.id}>
                        <div className={s.cards} >
                            <div className={s.cardsImage} >
                                <img src={`${i.image}`} className={s.icon} alt=""/>
                            </div>
                            <p className={s.skillName}>{i.skillName}</p>
                            <p className={s.skillDescription}>{i.skillDescription} </p>
                            <div className={s.cardsFooter} onClick={() => goToLink(i.link)}>
                                <p> Read more </p>
                                <img src={`${RightArrow}`} alt=""/>
                            </div>
                        </div>
                    </Fade>
                })}
            </div>

        </div>
    )
}


