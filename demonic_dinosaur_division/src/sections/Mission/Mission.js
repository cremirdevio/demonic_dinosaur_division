import missionHtml from './Mission.html';
import './Mission.scss';

const MissionSection = (container) => {
    container.innerHTML += missionHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* animate chart image */
        const missionDistrib = document.querySelector('.distributions');
        const missionChart = document.querySelector('.mission__chart-img');

        if ('IntersectionObserver' in window) {
            const observerCallback = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        missionChart.style.transform = 'translateX(-50%) scale(1)';
                        missionChart.style.opacity = '1';
                    }
                });
            };
            const observerOptions = {
                threshold: 0.5,
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);

            observer.observe(missionDistrib);
        } else {
            missionChart.style.transform = 'translateX(-50%) scale(1)';
            missionChart.style.opacity = '1';
        }
    });
};

export { MissionSection };
