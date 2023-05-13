import s from "./TitleText.module.scss";
import React from "react";

const Fade = require("react-reveal/Fade");

type PropsType = {
    title: string
    smallTitle: string
}

export const TitleText = (props: PropsType) => {
    return (
        <>
            <Fade left>
                <div className={s.lineDiv}>
                    <span className={s.smallTitle}>{props.smallTitle}</span>
                    <span className={s.aboutMeTitle}>{props.title}</span>
                </div>
            </Fade>
        </>
    )
}