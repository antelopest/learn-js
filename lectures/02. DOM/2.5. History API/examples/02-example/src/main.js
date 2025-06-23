import './style.css';

import {routes} from './routes/routes.js';
import NotFoundPage from './pages/notfound/notfound.js';

const view = document.getElementById('view');
const nav = document.getElementById('menu');

const getPath = () => {
    return window.location.pathname;
}

const changeMenuList = () => {
    const path = getPath();
    const list = nav.children;

    for (let i = 0; i < list.length; i++) {
        const a = list[i].children[0];

        a.classList.remove('active');

        if (a.getAttribute('href') === path) {
            a.classList.toggle('active');
        }
    }
}

const navigateTo = (path) => {
    history.pushState({}, '', path);

    render();
}

const renderManu = () => {
    for (let i = 0; i < routes.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.innerText = routes[i].name;
        a.setAttribute('href', routes[i].path);
        a.addEventListener('click', (e) => {
            e.preventDefault();

            navigateTo(routes[i].path);
        });

        li.appendChild(a);
        nav.appendChild(li);
    }
}

const renderPage = () => {
    const path = getPath();

    const currentPage = routes.find(e => e.path === path);

    if (currentPage) {
        view.innerHTML = currentPage.page();
    } else {
        view.innerHTML = NotFoundPage();
    }
}

const render = () => {
    changeMenuList();
    renderPage();
}

const initApp = () => {
    renderManu();
    changeMenuList();
    renderPage();
}

window.addEventListener('popstate', render);

document.addEventListener('DOMContentLoaded', initApp);