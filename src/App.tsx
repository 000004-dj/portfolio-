import React from 'react';
import './App.css';
import {Header} from "Components/Header/Header";
import s from "./App.module.css"
import {Main} from "Components/Main/Main";
import {Footer} from "Components/Footer/Footer";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <hr/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;



