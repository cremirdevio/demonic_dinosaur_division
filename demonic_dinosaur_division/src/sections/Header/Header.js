import headerHtml from './Header.html';
import './Header.scss';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

const HeaderSection = (container) => {
    container.innerHTML += headerHtml;

    window.addEventListener('DOMContentLoaded', () => {
        const headerMenu = document.querySelector('.header__menu');
        const headerMenuBtn = headerMenu.querySelector('.header__menu-btn');
        const headerNav = headerMenu.querySelector('.header__nav');

        let menuActive = false;

        const toggleNav = () => {
            if (menuActive) {
                menuActive = false;
                document.body.classList.remove('no-scroll');
                headerMenuBtn.classList.remove('is-active');
                headerNav.classList.remove('nav-active');
            } else {
                menuActive = true;
                document.body.classList.add('no-scroll');
                headerMenuBtn.classList.add('is-active');
                headerNav.classList.add('nav-active');
            }
        };

        headerMenuBtn.addEventListener('click', toggleNav);

        const anchorsLinks = document.querySelectorAll('.header__nav-link-anchor');

        anchorsLinks.forEach((link) => {
            link.onclick = (event) => {
                event.preventDefault();

                let elOffset = document.querySelector(`.${link.getAttribute('href')}`).offsetTop - document.querySelector('.header').clientHeight;

                window.scrollTo({ top: elOffset, behavior: 'smooth' });
                // hide menu if opened
                if (menuActive) {
                    menuActive = false;
                    document.body.classList.remove('no-scroll');
                    headerMenuBtn.classList.remove('is-active');
                    headerNav.classList.remove('nav-active');
                }
            };
        });
    });
};

export { HeaderSection };
