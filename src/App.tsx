import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "Components/Header/Header";
import s from "./App.module.css"
import {Main} from "Components/Main/Main";
import {Footer} from "Components/Footer/Footer";

function App() {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 130) {
            setShowBox(true);
        } else {
            setShowBox(false);
        }
    };

    return (
        <div className={s.App}>
            <Header/>
            {showBox && (
                    <a href="#Home" className={s.scrollBox}>↑</a>
            )}
            <hr/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;



