import todos from 'assets/images/projectsPhotos/todos.png'
import socialN_1 from 'assets/images/projectsPhotos/scialN.png'
import socialN_2 from 'assets/images/projectsPhotos/scialN_1.png'
import cards_1 from 'assets/images/projectsPhotos/cards.png'
import cards_2 from 'assets/images/projectsPhotos/cards_1.png'
import cards_3 from 'assets/images/projectsPhotos/cards_2.png'
import cards_4 from 'assets/images/projectsPhotos/cards_3.png'
import pizzas_1 from 'assets/images/projectsPhotos/pizzas.png'
import pizzas_2 from 'assets/images/projectsPhotos/pizzas_1.png'
import pizzas_3 from 'assets/images/projectsPhotos/pizzas_2.png'
import houses from 'assets/images/projectsPhotos/mega-domki.png'


export const projectsData = [
    {
        image: todos,
        title: "To-Do List",
        description: "Project for the distribution of tasks",
        projectId: "0_1",
        projectDescription: "Implementation of an application for creating task lists. It is possible to create various tasks, mark completed ones, sort them as they are done, change delete (CRUD). Creating customs universal components,  use React(HOOKs,), Redux, TypeScript, Unit testing, Material UI, Storybook, snapshot testing, RESTful (autorithation),  AXIOS, UUID,  FLUX",
        photos: [todos],
        projectURL: "https://000004-dj.github.io/task-manager/#/"
    },
    // {
    //     image: socialN_1,
    //     title: "Social Media",
    //     description: "social network for communication",
    //     projectId: "0_2",
    //     projectDescription: "social network for communication, finding friends, positioning yourself in online society(React, Redux, TypeScript)",
    //     photos: [socialN_1, socialN_2],
    //     projectURL: "https://github.com/000004-dj/social"
    // },
    {
        image: cards_1,
        title: "CARDS",
        description: "A project dedicated to the possibility of self-learning",
        projectId: "0_3",
        projectDescription: "Here you can create lists of questions that you want to practice, you can evaluate your knowledge. Create private and public decks of questions, as well as practice with other people's decks. The functions of sorting, searching, CRUD operations with decks and cards, authorization, and so on have been implemented. (TypeScript, React, Redux)",
        photos: [cards_1, cards_2, cards_3, cards_4],
        projectURL: "https://leskevich.github.io/cards/#/login"
    },
    {
        image: pizzas_1,
        title: "pizzas",
        description: "Similarity to a mini online store",
        projectId: "0_4",
        projectDescription: "Online store for a pizzeria. With the functions of adding goods to the basket, sorting, searching by goods. Written with React.js(with Hooks), Redux, Redux-thunk,  HTML, SCSS. Development of user interface components.",
        photos: [pizzas_1, pizzas_2, pizzas_3],
        projectURL: "https://github.com/000004-dj/mr-pizza"
    },
    {
        image: houses,
        title: "Mega-houses",
        description: "A project for selling pet houses",
        projectId: "0_5",
        projectDescription: "A project for selling pet houses with the ability to add products, sort, search by name.(Vue.js, Vuex)",
        photos: [houses],
        projectURL: "https://github.com/000004-dj/project-mega-domki"
    },

]




