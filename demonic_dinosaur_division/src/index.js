// libraries
import 'core-js/actual';
// sections
import TestComponent from 'Sections/TestSection/TestComponent';
import { HeaderSection } from 'Sections/Header/Header';
// components
import LazyLoad from 'Components/LazyLoad/LazyLoad';
// styles
import './styles/styles.scss';
import './fonts/fonts.scss';
import './styles/components.scss';

const bodyContainer = document.body;

// sections
HeaderSection(bodyContainer);
// components
LazyLoad();
