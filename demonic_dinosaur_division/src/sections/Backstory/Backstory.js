import backstoryHtml from './Backstory.html';
import './Backstory.scss';
import lightGallery from 'lightgallery';
import 'lightgallery/scss/lightgallery-bundle.scss';

const BackstorySection = (container) => {
    container.innerHTML += backstoryHtml;

    window.addEventListener('DOMContentLoaded', () => {
        const backstoryGallery = document.querySelector('.backstory__gallery');
        console.log(backstoryGallery);
        const nftPics = document.querySelectorAll('.backstory__gallery-link');

        nftPics.forEach((linkEl, index) => {
            const picLink = linkEl.getAttribute('href');

            import(/* webpackMode: "eager" */ `../../images/lazyload/nft-pics/${picLink}`).then((res) => {
                const imgHref = res.default;
                linkEl.setAttribute('href', imgHref);

                /* initialize a gallery after processing the last element in the array */
                if (nftPics.length - 1 === index) {
                    console.log('init');
                    lightGallery(backstoryGallery);
                }
            });
        });
    });
};

export { BackstorySection };
