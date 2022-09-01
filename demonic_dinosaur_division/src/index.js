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
import { FormSection } from 'Sections/Form/Form';
import { FooterSection } from 'Sections/Footer/Footer';
// components
import LazyLoad from 'Components/LazyLoad/LazyLoad';
import { PageLoader, HidePageLoader } from 'Components/PageLoader/PageLoader';

const bodyContainer = document.body;

PageLoader(bodyContainer);

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
    FormSection(mainTag);

    return container.appendChild(mainTag);
};

// sections
HeaderSection(bodyContainer);
mainContainer(bodyContainer);
FooterSection(bodyContainer);
// components
LazyLoad();

window.addEventListener('DOMContentLoaded', () => {
    HidePageLoader(bodyContainer);
    /* use a custom scrollbar but only on desktop devices */
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const osInstance = OverlayScrollbars(document.querySelector('body'), {});
    }
});
