import React, {useState} from "react";
import s from "./Header.module.scss"
import {NavBar} from "./NavBar/NavBar";
import {NavBarMobile} from "./NavBar/NavBarMobile/NavBarMobile";
import burgerMenuIcon from "../../assets/images/menu.png"

export const Header = () => {
    const [activeMode, setActiveMode] = useState(false)
    const mobileMenuOn = () => {
        setActiveMode(!activeMode)
    }
    const isClosed = () =>{
            setActiveMode(false)
    }

    const burgerIcon = () => {
        return (
            <div className={`${s.burgerIconContainer} burgerIconContainer`}>
                <img src={`${burgerMenuIcon}`} alt="" className={s.burgerIcon}
                     onClick={mobileMenuOn}/>
            </div>
        )

    }

    if (activeMode) {
        return (
            <>
                {burgerIcon()}
            <div className={s.navMobileContainer}>
                <NavBarMobile mobileMenuOn={mobileMenuOn} onClickCloseMenu={isClosed}/>
            </div>
            </>
        )
    }

    return (
        <div className={s.Header}>
            <NavBar/>
            {burgerIcon()}
        </div>
    )
}