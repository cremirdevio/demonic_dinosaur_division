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
                    lightGallery(backstoryGallery);

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
    });
};

export { BackstorySection };
