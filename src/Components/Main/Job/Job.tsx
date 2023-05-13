import React from "react";
import s from "./Job.module.scss"
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {CustomButton} from "../../additionaly-components/CustomButton/CustomButtom";
import ArrowRightIcon from "../../../assets/images/right-arrows.png"
import image from "../../../assets/images/jobPageImage.jpg"
const Fade = require("react-reveal/Fade");
export const Job = () => {
    return (
        <div className={s.Job}>
            <div className={s.jobContainer}>

                <TitleText
                    title={"Looking into remote work options"}
                    smallTitle={"call to action"}
                />
                <Fade right>
                <CustomButton
                    buttonTitle={"here me"}
                    design={"dark"}
                    buttonIcon={ArrowRightIcon}
                    navigateTo={"#Contact"}
                />
                </Fade>
            </div>
            <div className={s.imageBlock} style={{backgroundImage: `url(${image})`}}></div>
        </div>
    )
}