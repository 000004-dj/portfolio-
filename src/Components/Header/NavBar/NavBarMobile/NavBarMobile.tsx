import React from "react";
import s from "./NavBarMobile.module.scss"

type PropsType = {
    mobileMenuOn: () => void
}

export const NavBarMobile = (props: PropsType) => {
    return (
        <div className={s.NavBar}>
            <a href={"#Home"} onClick={() => props.mobileMenuOn}>Home</a>
            <a href={"#Skills"} onClick={() => props.mobileMenuOn}>Skills</a>
            <a href={"#Portfolio"} onClick={() => props.mobileMenuOn}>Portfolio</a>
            <a href={"#Contact"} onClick={() => props.mobileMenuOn}>Contact</a>

        </div>
    )
}