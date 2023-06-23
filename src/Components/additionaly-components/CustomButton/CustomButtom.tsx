import s from "./CustomButton.module.scss";
import React from "react";
import {useNavigate} from "react-router-dom";

type PropsType = {
    buttonTitle: string
    design: "light" | "dark"
    onClick?: () => void
    buttonIcon?: any
    link?: boolean
    navigateTo?: string
}

const linkStyle = {
    background: "black",
    color: "white",
    display: "block",
    textDecoration: "none"
}

export const CustomButton = (props: PropsType) => {
    const goToLink = () => {
        window.location.href = "https://drive.google.com/file/d/1gDmQG2yxg0U_ekMY-Yn7Wd1qZb8YqnkT/view?usp=sharing"
    }
    const customButton = () => {
        return <button
            className={s.button}
            onClick={props.link ? goToLink : () => {}}
            style={props.design === "dark" ? {background: "black", color: "white"} : {}}
        >
            {props.buttonTitle} <img src={props.buttonIcon} style={{width: "20px"}} alt=""/>

        </button>

    }
    return (
        <div>
            {
                props.navigateTo ?
                    <a href={props.navigateTo} className={s.button}
                       style={props.design === "dark" ? linkStyle : {}}
                    >{props.buttonTitle}<img
                        src={props.buttonIcon} style={{width: "20px"}} alt=""/></a>
                    : customButton()
            }

        </div>
    )

}