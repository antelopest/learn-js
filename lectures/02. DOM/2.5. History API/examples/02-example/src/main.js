import './style.css';

const menu = [
    {
        name: 'Main',
        path: '/',
        html: '<h3>Main page</h3>'
    },
    {
        name: 'About',
        path: '/about',
        html: '<h3>About</h3>'
    },
    {
        name: 'Contact',
        path: '/contact',
        html: '<h3>Contact</h3>'
    }
];

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
    for (let i = 0; i < menu.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.innerText = menu[i].name;
        a.setAttribute('href', menu[i].path);
        a.addEventListener('click', (e) => {
            e.preventDefault();

            navigateTo(menu[i].path);
        });

        li.appendChild(a);
        nav.appendChild(li);
    }
}

const renderPage = () => {
    const path = getPath();

    const page = menu.find(e => e.path === path);

    if (page) {
        view.innerHTML = page.html;
    } else {
        view.innerHTML = '<h3>404 Page</h3>';
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