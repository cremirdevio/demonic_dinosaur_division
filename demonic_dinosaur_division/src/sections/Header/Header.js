import headerHtml from './Header.html';
import './Header.scss';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

const HeaderSection = (container) => {
    container.innerHTML += headerHtml;

    window.addEventListener('DOMContentLoaded', () => {
        const headerMenu = document.querySelector('.header__menu');
        const headerMenuBtn = headerMenu.querySelector('.header__menu-btn');
        const headerNav = headerMenu.querySelector('.header__nav');

        const toggleNav = () => {
            headerMenuBtn.classList.toggle('is-active');
            headerNav.classList.toggle('nav-active');
        };

        headerMenuBtn.addEventListener('click', toggleNav);
    });
};

export { HeaderSection };
