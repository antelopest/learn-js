import './style.css';

const routes = {
    '/': '<h3>Main page</h3>',
    '/about': '<h3>About Page</h3>',
    '/contact': '<h3>Contact Page</h3>'
}

const view = document.getElementById('view');
const list = document.querySelectorAll('a');

const getPath = () => {
    return window.location.pathname;
}

const changeMenuList = () => {
    const path = window.location.pathname;

    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('active');

        if (list[i].getAttribute('href') === path) {
            list[i].classList.toggle('active');
        }
    }
}

const renderPage = () => {
    const path = getPath();

    view.innerHTML = routes[path] ||
        '<h3>404 Page</h3>';
}

const render = () => {
    changeMenuList();
    renderPage();
}

const navigateTo = (path) => {
    history.pushState({}, '', path);

    render();
}

document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');

    if (link) {
        e.preventDefault();
        navigateTo(link.getAttribute('href'));
    }
})

window.addEventListener('popstate', () => {
    render();
})

document.addEventListener('DOMContentLoaded', () => {
    render();
});

