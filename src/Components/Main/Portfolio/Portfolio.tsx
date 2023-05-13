import React from "react";
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {Project} from "./Project/Project";
import s from "./Portfolio.module.scss"

export const Portfolio = () => {
    return (
        <div className={s.Portfolio} id={"Portfolio"}>
            <TitleText
                title={"my projects"}
                smallTitle={"portfolio"}
            />
            <Project/>
        </div>
    )
}


