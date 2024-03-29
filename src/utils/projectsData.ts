import todos from 'assets/images/projectsPhotos/todos.png'
import cards_1 from 'assets/images/projectsPhotos/cards.png'
import cards_2 from 'assets/images/projectsPhotos/cards_1.png'
import cards_3 from 'assets/images/projectsPhotos/cards_2.png'
import cards_4 from 'assets/images/projectsPhotos/cards_3.png'
import pizzas_1 from 'assets/images/projectsPhotos/pizzas.png'
import pizzas_2 from 'assets/images/projectsPhotos/pizzas_1.png'
import pizzas_3 from 'assets/images/projectsPhotos/pizzas_2.png'
import houses from 'assets/images/projectsPhotos/mega-domki.png'
import urzad from 'assets/images/projectsPhotos/urzad.png'
import SNProfile from 'assets/images/projectsPhotos/SN-profile.png'
import SNAuth from 'assets/images/projectsPhotos/SN-auth.png'
import SNHome from 'assets/images/projectsPhotos/SN-home.png'
import SNSeanses from 'assets/images/projectsPhotos/SN-seanses.png'



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
    {
        image: cards_1,
        title: "CARDS",
        description: "A project dedicated to the possibility of self-learning",
        projectId: "0_2",
        projectDescription: "Here you can create lists of questions that you want to practice, you can evaluate your knowledge. Create private and public decks of questions, as well as practice with other people's decks. The functions of sorting, searching, CRUD operations with decks and cards, authorization, and so on have been implemented. (TypeScript, React, Redux)",
        photos: [cards_1, cards_2, cards_3, cards_4],
        projectURL: "https://leskevich.github.io/cards/#/login"
    },
    {
        image: pizzas_1,
        title: "pizzas",
        description: "Similarity to a mini online store",
        projectId: "0_3",
        projectDescription: "Online store for a pizzeria. With the functions of adding goods to the basket, sorting, searching by goods. Written with React.js(with Hooks), Redux, Redux-thunk,  HTML, SCSS. Development of user interface components.",
        photos: [pizzas_1, pizzas_2, pizzas_3],
        projectURL: "https://github.com/000004-dj/mr-pizza"
    },
    {
        image: houses,
        title: "Mega-houses",
        description: "A project for selling pet houses",
        projectId: "0_4",
        projectDescription: "A project for selling pet houses with the ability to add products, sort, search by name.(Vue.js, Vuex)",
        photos: [houses],
        projectURL: "https://github.com/000004-dj/project-mega-domki"
    },
    {
        image: urzad,
        title: "urzad",
        description: "Example of a city administration page",
        projectId: "0_5",
        projectDescription: "Example of a city administration page written using pure javascript and bootstrap",
        photos: [urzad],
        projectURL: "https://000004-dj.github.io/urzad/"
    },
    {
        image: SNProfile,
        title: "Social Network",
        description: "A social network with functionality like Instagram",
        projectId: "0_6",
        projectDescription: "a social network with functionality like Instagram, with the ability to create your profile, create and share posts, buy subscriptions, communicate, and so on (under implementation)",
        photos: [SNProfile, SNAuth, SNSeanses, SNHome ],
        projectURL: "https://inctagram.vercel.app"
    }

]




