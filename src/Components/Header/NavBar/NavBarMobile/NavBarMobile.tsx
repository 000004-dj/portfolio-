import React from "react";
import s from "./NavBarMobile.module.scss"

type PropsType = {
    mobileMenuOn: () => void,
    onClickCloseMenu: () => void
}

export const NavBarMobile = (props: PropsType) => {
    return (
        <div className={s.NavBar}>
            <a href={"#Home"} onClick={() => props.onClickCloseMenu()}>Home</a>
            <a href={"#Skills"} onClick={() => props.onClickCloseMenu()}>Skills</a>
            <a href={"#Portfolio"} onClick={() => props.onClickCloseMenu()}>Portfolio</a>
            <a href={"#Contact"} onClick={() => props.onClickCloseMenu()}>Contact</a>

        </div>
    )
}