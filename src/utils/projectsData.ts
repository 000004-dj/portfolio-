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
        projectDescription: "Project for the distribution of tasks, various kinds of lists or notes (React, Redux, TypeScript)",
        photos: [todos],
        projectURL: "https://github.com/000004-dj/todos"
    },
    {
        image: socialN_1,
        title: "Social Media",
        description: "social network for communication",
        projectId: "0_2",
        projectDescription: "social network for communication, finding friends, positioning yourself in online society(React, Redux, TypeScript)",
        photos: [socialN_1, socialN_2],
        projectURL: "https://github.com/000004-dj/social"
    },
    {
        image: cards_1,
        title: "CARDS",
        description: "A project dedicated to the possibility of self-learning",
        projectId: "0_3",
        projectDescription: "A project dedicated to the possibility of self-learning. You can create your own training program or use the ready-made program of other participants(React, Redux, TypeScript)",
        photos: [cards_1, cards_2, cards_3, cards_4],
        projectURL: "https://github.com/Leskevich/cards"
    },
    {
        image: pizzas_1,
        title: "pizzas",
        description: "Similarity to a mini online store",
        projectId: "0_4",
        projectDescription: "Similarity to a mini online store selling pizza, with the ability to add products to the cart, customize the product, sort products, remove from the basket, and so on(React, Redux)",
        photos: [pizzas_1, pizzas_2, pizzas_3],
        projectURL: "https://github.com/Leskevich/cards"
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




