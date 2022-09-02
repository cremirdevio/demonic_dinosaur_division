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

        /* animate parts of the chart */
        const missionChartParts = document.querySelectorAll('.mission__chart-pie');

        const activeChartPie = (item) => {
            missionChartParts.forEach((chartPart) => {
                /* remove the class name from an active element */
                chartPart.classList.remove('mission__chart-pie-active');
            });
            /* add active class to the element that has been hovered on to */
            item.classList.add('mission__chart-pie-active');
        };

        missionChartParts.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                activeChartPie(item);
            });

            /* remove the class name from an active element */
            item.addEventListener('mouseleave', () => {
                item.classList.remove('mission__chart-pie-active');
            });
        });

        /* add an effect when user hovers over the description text */
        const chartDescriptionItems = document.querySelectorAll('.distributions__chart-item');

        chartDescriptionItems.forEach((item, index) => {
            const respectivelyChartPart = missionChartParts[index];

            item.addEventListener('mouseenter', () => {
                activeChartPie(respectivelyChartPart);
            });

            /* remove the class name from an active element */
            item.addEventListener('mouseleave', () => {
                respectivelyChartPart.classList.remove('mission__chart-pie-active');
            });
        });
    });
};

export { MissionSection };
