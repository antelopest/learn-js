import MainPage from '../pages/main/main.js';
import AboutPage from '../pages/about/about.js';
import ContactPage from '../pages/contact/contact.js';

export const routes = [
    {
        name: 'Main',
        path: '/',
        page: MainPage
    },
    {
        name: 'Contact',
        path: '/contact',
        page: ContactPage
    },
    {
        name: 'About',
        path: '/about',
        page: AboutPage
    }
];