import {v1} from "uuid";
import ReactIcon from '../assets/images/skills/react.png'
import JSIcon from '../assets/images/skills/js.png'
import ReduxIcon from '../assets/images/skills/redux.svg'
import TypeScriptIcon from '../assets/images/skills/typescript.png'
import CssIcon from '../assets/images/skills/css-3.png'
import HTMLIcon from '../assets/images/skills/html.png'


export const skillsData = [
    {
        id: v1(),
        skillName: "React",
        skillDescription: "It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
        link: "react.dev",
        image: ReactIcon
    },
    {
        id: v1(),
        skillName: "JavaScript",
        skillDescription: "Is a scripting or programming language that allows you to implement complex features on web pages ",
        link: "developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
        image: JSIcon
    },
    {
        id: v1(),
        skillName: "Redux",
        skillDescription: "Is a state management library that you can use with any JS library or framework like React, Angular, or Vue",
        link: "redux.js.org/",
        image: ReduxIcon
    },
    {
        id: v1(),
        skillName: "TypeScript",
        skillDescription: "is a strongly typed programming language that builds on JavaScript",
        link: "www.typescriptlang.org/",
        image: TypeScriptIcon
    },
    {
        id: v1(),
        skillName: "CSS",
        skillDescription: "is a language for specifying how documents are presented to users — how they are styled, laid out, etc.",
        link: "developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS",
        image: CssIcon
    },
    {
        id: v1(),
        skillName: "HTML",
        skillDescription: "is a markup language used to create the frontend of websites. It is written to include the structure of a web page and rendered by web browsers into the websites that we see online.",
        link: "developer.mozilla.org/en-US/docs/Web/HTML",
        image: HTMLIcon
    },


]