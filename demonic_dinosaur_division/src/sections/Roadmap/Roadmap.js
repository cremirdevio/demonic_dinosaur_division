import roadmapHtml from './Roadmap.html';
import './Roadmap.scss';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

const RoadmapSection = (container) => {
    container.innerHTML += roadmapHtml;

    window.addEventListener('DOMContentLoaded', () => {
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

        document.querySelectorAll('.swiper-slide').forEach((slide) => {
            const osInstance = OverlayScrollbars(slide, {});
        });
    });
};

export { RoadmapSection };
