import React from "react";
import s from "./Footer.module.scss"
import facebook from 'assets/images/social-icons/facebook.png'
import instagram from 'assets/images/social-icons/instagram.png'
import whatsapp from 'assets/images/social-icons/whatsapp.png'
import telegram from 'assets/images/social-icons/telegram.png'


export const Footer = () => {

    return (
        <div className={s.container}>
            <div className={s.name}>
                <span>Samuil Prytchyn</span>
            </div>
            <div className={s.social}>
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100007958263265">
                        <img className="svg"
                             src={`${facebook}`} alt=""/></a>
                    </li>
                    <li><a href="https://www.instagram.com/semka_original">
                        <img className="svg"
                             src={`${instagram}`}  alt=""/></a>
                    </li>
                    <li><a href="https://wa.me/48731380234">
                        <img className="svg"
                             src={`${whatsapp}`}  alt=""/></a>
                    </li>
                    <li><a href="https://t.me/SamPritt">
                        <img className="svg"
                             src={`${telegram}`}  alt=""/></a>
                    </li>

                </ul>
            </div>

            <div className={s.description}>
                <span>
                All rights reserved
                </span>
            </div>
        </div>
    )
}