import React from "react";
import s from "./NavBar.module.scss"

export const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <a href={"/#Home"}>Home</a>
            <a href={"/#skills"}>Skills</a>
            <a href={"#Portfolio"}>Portfolio</a>
            <a href={"#Contact"}>Contact</a>
        </div>
    )
}