import backstoryHtml from './Backstory.html';
import './Backstory.scss';
// libraries
import lightGallery from 'lightgallery';
import 'lightgallery/scss/lightgallery-bundle.scss';
// components
import { textTypingEffect } from 'Components/TextTypingEffect/textTypingEffect';

const BackstorySection = (container) => {
    container.innerHTML += backstoryHtml;

    window.addEventListener('DOMContentLoaded', () => {
        const backstoryGallery = document.querySelector('.backstory__gallery');
        const nftPics = document.querySelectorAll('.backstory__gallery-link');

        /* add link address */
        nftPics.forEach((linkEl, index) => {
            const picLink = linkEl.getAttribute('href');

            import(/* webpackMode: "eager" */ `../../images/lazyload/nft-pics/${picLink}`).then((res) => {
                const imgHref = res.default;
                linkEl.setAttribute('href', imgHref);

                /* initialize a gallery after processing the last element in the array */
                if (nftPics.length - 1 === index) {
                    lightGallery(backstoryGallery, {
                        download: false,
                    });

                    backstoryGallery.addEventListener('lgBeforeOpen', () => {
                        /* stop animation when user opens a gallery */
                        backstoryGallery.style.animationPlayState = 'paused';
                    });
                    backstoryGallery.addEventListener('lgBeforeClose', () => {
                        backstoryGallery.style.animationPlayState = 'running';
                    });
                }
            });
        });

        /* typewriter effect */
        const typewriterText = 'From the blazing depths of a realm known as hell, gargantuan, scaly, infernal creatures have emerged.';
        const typewriterDestination = document.querySelector('.backstory__subtitle');

        textTypingEffect(typewriterText, typewriterDestination);

        /* 'Unleash your inner demon.' animation */

        /* we need it to get text node width */
        const animatedText = document.querySelector('.backstory__description-animation-text');
        /* a line that will be animated */
        const animatedLine = document.querySelector('.backstory__description-animation-line');

        /* this function lets use @keyframes into JS */
        let dynamicStyles = null;

        const addAnimation = (body) => {
            if (!dynamicStyles) {
                dynamicStyles = document.createElement('style');
                dynamicStyles.type = 'text/css';
                document.head.appendChild(dynamicStyles);
            }

            dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
        };

        /* calculate text node width and add the animated line */
        const animationBody = () => {
            const animatedTextWidth = animatedText.getBoundingClientRect().width;

            addAnimation(`
                @keyframes moveLine {
                    0%,
                    100% {
                        transform: translate3d(0px, 0, 0) scale(1);
                    }
                    25%,
                    75% {
                        transform: translate3d(${animatedTextWidth / 2}px, 0, 0) scale(2.5, 1);
                    }
                    50% {
                        transform: translate3d(${animatedTextWidth - 10}px, 0, 0) scale(1);
                    }
                }        
            `);

            animatedLine.style.animation = 'moveLine 5s linear infinite';
        };

        animationBody();
    });
};

export { BackstorySection };
