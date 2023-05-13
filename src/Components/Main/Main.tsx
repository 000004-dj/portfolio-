import React from "react";
import s from "./Main.module.scss"
import {HomePage} from "./HomePage/HomePage";
import {SkillPage} from "./SkillsPage/SkillPage";
import {Portfolio} from "./Portfolio/Portfolio";
import {Job} from "./Job/Job";
import {Contact} from "./Contact/Contact";



export const Main = () => {
    return (
        <div className={s.Main}>
            <div className={s.blockContainer}>
                <HomePage/>
                <SkillPage/>
                <Portfolio/>
                <Job/>
                <Contact/>
            </div>
        </div>
    )
}



