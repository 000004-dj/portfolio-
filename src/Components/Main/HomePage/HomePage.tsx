import s from "./HomePage.module.scss";
import React from "react";
import photo from "../../../assets/images/photo.png"
import {HomePageTitleText} from "../../additionaly-components/TitleText/HomePageTitle/HomePageTitleText";
import {CustomButton} from "../../additionaly-components/CustomButton/CustomButtom";
import CloudIcon from "../../../assets/images/cloud.png"
const Fade = require("react-reveal/Fade");

export const HomePage = () => {
    return <div className={s.HomePage} id={"Home"}>

        <div className={`${s.flexContainer} ${s.blockContainer}`}>
            <div className={s.textBlock}>
                <Fade top>
                    <HomePageTitleText title={"Hi, i am Samuil and i Frontend Developer"}/>
                </Fade>
                <Fade bottom>
                <CustomButton
                    buttonTitle={"DOWNLOAD CV"}
                    design={"light"}
                    buttonIcon={CloudIcon}
                    link={true}
                />
                </Fade>
            </div>
            <Fade>
                <div className={s.image} style={{backgroundImage: `url(${photo})`}}></div>
            </Fade>
        </div>
    </div>
}