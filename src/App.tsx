import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "Components/Header/Header";
import s from "./App.module.css"
import {Main} from "Components/Main/Main";
import {Footer} from "Components/Footer/Footer";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default App;



