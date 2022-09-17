import roadmapHtml from './Roadmap.html';
import './Roadmap.scss';
// libraries
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
// components
import { textTypingEffect } from 'Components/TextTypingEffect/textTypingEffect';

const RoadmapSection = (container) => {
    container.innerHTML += roadmapHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* carousel initialization */
        const swiper = new Swiper('.roadmap__swiper', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30,
            simulateTouch: false,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        /* add a custom scrollbar to each slider in case there's too much text */
        document.querySelectorAll('.swiper-slide').forEach((slide) => {
            const osInstance = OverlayScrollbars(slide, {});
        });

        /* toggle dino pictures */
        const roadmapDinoPics = document.querySelectorAll('.roadmap__dino .image');

        swiper.on('slideChange', (event) => {
            const slide = event.activeIndex;

            // hide all of the images
            roadmapDinoPics.forEach((pic) => {
                pic.classList.remove('roadmap__dino-active');
            });

            // show the active image
            roadmapDinoPics[slide].classList.add('roadmap__dino-active');
        });

        /* typewriter effect */
        const typewriterText = 'Coming soon.';
        const typewriterDestination = document.querySelector('.roadmap__subtitle');

        textTypingEffect(typewriterText, typewriterDestination);
    });
};

export { RoadmapSection };
