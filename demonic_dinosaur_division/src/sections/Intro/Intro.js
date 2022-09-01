import introHtml from './Intro.html';
import './Intro.scss';

const IntroSection = (container) => {
    container.innerHTML += introHtml;

    window.addEventListener('DOMContentLoaded', () => {
        let audioState = 'paused';

        const musicTheme = document.querySelector('#musicTheme');
        const audioPlayBtn = document.querySelector('.intro__audio-play');
        const audioPlayIcon = audioPlayBtn.querySelector('.intro__audio-play-icon');

        /* set an icon to the default state */
        audioPlayIcon.querySelector('#from_pause_to_play').beginElement();
        setTimeout(() => {
            audioPlayIcon.style.opacity = 1;
        }, 600);

        audioPlayBtn.addEventListener('click', () => {
            if (audioState === 'paused') {
                audioState = 'playing';
                /* animate icon */
                audioPlayIcon.querySelector('#from_play_to_pause').beginElement();
                /* play audio file */
                musicTheme.play();
                /* change button hover text */
                audioPlayBtn.setAttribute('title', 'Pause the music theme');
            } else {
                audioState = 'paused';
                /* animate icon */
                audioPlayIcon.querySelector('#from_pause_to_play').beginElement();
                /* play audio file */
                musicTheme.pause();
                /* change button hover text */
                audioPlayBtn.setAttribute('title', 'Play the music theme');
            }
        });

        /* animated title */
        const introBlock = document.querySelector('.intro');
        const introTitle = document.querySelectorAll('.intro__title .title__text');
        const introSubtitle = document.querySelector('.intro__subtitle');

        if ('IntersectionObserver' in window) {
            const observerCallback = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        introTitle.forEach((title, index) => {
                            setTimeout(() => {
                                title.classList.add('show-title');
                            }, index * 175);
                        });
                        setTimeout(() => {
                            introSubtitle.style.transform = 'translateY(0)';
                            introSubtitle.style.opacity = '1';
                        }, 1000);
                    }
                });
            };
            const observerOptions = {
                threshold: 0.25,
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);

            observer.observe(introBlock);
        } else {
            introTitle.forEach((title, index) => {
                setTimeout(() => {
                    title.classList.add('show-title');
                }, index * 175);
            });
        }

        /* show animated sparks when main image is loaded */
        const introBgImage = document.querySelector('.intro__background-mainpic');
        const introBgSparksLeft = document.querySelector('.intro__background-flames-left');
        const introBgSparksRight = document.querySelector('.intro__background-flames-right');

        introBgImage.addEventListener('load', () => {
            introBgSparksLeft.style.display = 'block'
            introBgSparksRight.style.display = 'block'
        })
    });
};

export { IntroSection };
