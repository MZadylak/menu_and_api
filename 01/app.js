// import './sass/style.scss';
// import logo from './img/logo.png'

const navBurger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__burger ~ .nav__list');
const navClose = document.querySelector('.nav__header .nav__close');
const navSearchBtn = document.querySelector('.nav__mobile .nav__search-btn');
const navSearch = document.querySelector('.nav__mobile .nav__search');
const navLogin = document.querySelector('.nav__login');
const desktopList = document.querySelector('.nav__desktop .nav__list');

navBurger.addEventListener('click', () => {
    navList.classList.add('nav__list--active');
});

navClose.addEventListener('click', () => {
    navList.classList.remove('nav__list--active');
});

navSearchBtn.addEventListener('click', () => {
    navSearch.classList.toggle('nav__search--active');
});

navLogin.addEventListener('click', () => {
    desktopList.classList.toggle('nav__list--active');
})