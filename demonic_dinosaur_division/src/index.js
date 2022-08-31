// libraries
import 'core-js/actual';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
// styles
import './styles/styles.scss';
import './fonts/fonts.scss';
// sections
import { HeaderSection } from 'Sections/Header/Header';
import { IntroSection } from 'Sections/Intro/Intro';
import { MissionSection } from 'Sections/Mission/Mission';
import { RoadmapSection } from 'Sections/Roadmap/Roadmap';
import { BackstorySection } from 'Sections/Backstory/Backstory';
import { TeamSection } from 'Sections/Team/Team';
// components
import LazyLoad from 'Components/LazyLoad/LazyLoad';

const bodyContainer = document.body;

const mainContainer = (container) => {
    // root container
    let mainTag = document.createElement('main');
    mainTag.className = 'main';
    // sections
    IntroSection(mainTag);
    MissionSection(mainTag);
    RoadmapSection(mainTag);
    BackstorySection(mainTag);
    TeamSection(mainTag);

    return container.appendChild(mainTag);
};

// sections
HeaderSection(bodyContainer);
mainContainer(bodyContainer);
// components
LazyLoad();

window.addEventListener('DOMContentLoaded', () => {
    const osInstance = OverlayScrollbars(document.querySelector('body'), {});
});
