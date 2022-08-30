import introHtml from './Intro.html';
import './Intro.scss';

const IntroSection = (container) => {
    container.innerHTML += introHtml;

    window.addEventListener('DOMContentLoaded', () => {
        let audioState = 'paused';
        const musicTheme = document.querySelector('#musicTheme');
        const audioPlayBtn = document.querySelector('.intro__audio-play');
        const audioPlayIcon = audioPlayBtn.querySelector('.intro__audio-play-icon');
        audioPlayIcon.querySelector('#from_pause_to_play').beginElement();
        setTimeout(() => {
            audioPlayIcon.style.opacity = 1;
        }, 600);

        audioPlayBtn.addEventListener('click', () => {
            if (audioState === 'paused') {
                audioState = 'playing';
                audioPlayIcon.querySelector('#from_play_to_pause').beginElement();
                musicTheme.play();
                audioPlayBtn.setAttribute('title', 'Pause the music theme');
            } else {
                audioState = 'paused';
                audioPlayIcon.querySelector('#from_pause_to_play').beginElement();
                musicTheme.pause();
                audioPlayBtn.setAttribute('title', 'Play the music theme');
            }
        });
    });
};

export { IntroSection };
