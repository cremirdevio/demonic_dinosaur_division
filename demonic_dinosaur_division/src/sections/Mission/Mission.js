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
        const missionChartCollision = document.querySelectorAll('.mission__chart-collision-item');

        const activeChartPie = (index) => {
            missionChartParts.forEach((chartPart) => {
                /* remove the class name from an active element */
                chartPart.classList.remove('mission__chart-pie-active');
            });
            /* add active class to the element that has been hovered on to */
            missionChartParts[index].classList.add('mission__chart-pie-active');
            missionChartCollision[index].classList.add('mission__chart-pie-active');
        };

        const disableChartPie = (index) => {
            /* remove the class name from an active element */
            missionChartCollision[index].classList.remove('mission__chart-pie-active');
            missionChartParts[index].classList.remove('mission__chart-pie-active');
        };

        missionChartCollision.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                activeChartPie(index);
            });

            item.addEventListener('mouseleave', () => {
                disableChartPie(index);
            });
        });

        /* add an effect when user hovers over the description text */
        const chartDescriptionItems = document.querySelectorAll('.distributions__chart-item');

        chartDescriptionItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                activeChartPie(index);
            });

            item.addEventListener('mouseleave', () => {
                disableChartPie(index);
            });
        });
    });
};

export { MissionSection };
