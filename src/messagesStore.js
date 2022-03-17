const messagesStore = {
    home: {
        sender: 'personal',
        message: 'this website was created using React and Redux, animated with react-transition-group package',
        github: 'https://github.com/ainozerie/web_developer',
        explore: ''
    },
    projects: {
        sender: 'personal',
        message: 'in console you can get additioanl information about projects by clicking on appropriate elements',
        github: '',
        explore: ''
    },
    skills: {
        sender: 'personal',
        message: 'skills page is being displayed',
        github: '',
        explore: ''
    },
    'about me': {
        sender: 'personal',
        message: 'a small story about me me getting familiar with web development. different ways to contact me can be found in the footer',
        github: '',
        explore: ''
    },
    foodapp: {
        sender: 'personal',
        message: 'created using HTML, CSS, Javascript and third party API',
        github: 'https://github.com/ainozerie/foodApp',
        explore: 'https://food-application.vercel.app'
    },
    todolist: {
        sender: 'personal',
        message: 'created using HTML, CSS and Javascript, localStorage',
        github: 'https://github.com/ainozerie/toDoList',
        explore: 'https://to-do-list-lyart.vercel.app'
    },
    mazeapp: {
        sender: 'personal',
        message: 'created using HTML, CSS and Javascript and backtracking (recursive) method',
        github: 'https://github.com/ainozerie/maze',
        explore: 'https://maze-one-psi.vercel.app'
    },
    countries: {
        sender: 'personal',
        message: 'created using React, axios and third party API',
        github: 'https://github.com/ainozerie/countries',
        explore: ''
    },
    bookdirectory: {
        sender: 'personal',
        message: 'node and Express were used for backend, frontend was written with React and axios',
        github: 'https://github.com/ainozerie/book-directory-frontend',
        explore: ''
    },
    html: {
        sender: 'personal',
        message: 'almost in every project I was using HTML, I have got a wide experience in it',
        github: '',
        explore: ''
    },
    css: {
        sender: 'personal',
        message: 'I try to implement each detail the way I see it, you can notice it while observing this website',
        github: '',
        explore: ''
    },
    js: {
        sender: 'personal',
        message: 'my first programming language, I do not stop to learn it',
        github: '',
        explore: ''
    },
    ts: {
        sender: 'personal',
        message: "not much experienced with it, but got an idea how to use it",
        github: '',
        explore: ''
    },
    react: {
        sender: 'personal',
        message: 'my first framework, really love it, a lot of my projects were written with React',
        github: '',
        explore: ''
    },
    redux: {
        sender: 'personal',
        message: 'a lovely solution to store temporary data availiable for all components, I know how to deal with it',
        github: '',
        explore: ''
    },
    node: {
        sender: 'personal',
        message: 'old JS but on the server side, I keep on developing a backend developer in yourself',
        github: '',
        explore: ''
    },
    express: {
        sender: 'personal',
        message: 'super useful package that simlify backend development with node, I use it alot',
        github: '',
        explore: ''
    },
    sql: {
        sender: 'personal',
        message: 'know how to connect backend to database, how to extract needed data and update existing one',
        github: '',
        explore: ''
    },
    git: {
        sender: 'personal',
        message: 'any project starts from creacting a repo, no problems with it',
        github: '',
        explore: ''
    },
    socketio: {
        sender: 'personal',
        message: 'very exited about creating real-time applications, I have learned the basics and keep on learning',
        github: '',
        explore: ''
    },
    jest: {
        sender: 'personal',
        message: 'got some experince with testing, understanding how to test code helps me to prevent a lot of mistakes while coding',
        github: '',
        explore: ''
    }
}

const getOne = (type) => {
    return messagesStore[type];
}
export default getOne;