// @ts-ignore
import s from "./HomePageTitleText.module.scss";
import React from "react";

type PropsType = {
    title: string
}

export const HomePageTitleText = (props: PropsType) => {
    return (
        <>
            <div className={s.lineDiv}>
                <span className={s.aboutMeTitle}>{props.title}</span>
            </div>
        </>
    )
}