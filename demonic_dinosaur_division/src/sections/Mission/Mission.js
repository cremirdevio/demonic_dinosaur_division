import missionHtml from './Mission.html';
import './Mission.scss';

const MissionSection = (container) => {
    container.innerHTML += missionHtml;

    window.addEventListener('DOMContentLoaded', () => {
        
    });
};

export { MissionSection };
