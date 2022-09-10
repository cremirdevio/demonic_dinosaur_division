import formHtml from './Form.html';
import './Form.scss';
// components
import { textTypingEffect } from 'Components/TextTypingEffect/textTypingEffect';

const FormSection = (container) => {
    container.innerHTML += formHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* typewriter effect */
        const typewriterText = 'Sign up to receive updates from Demonic Dinosaur Division NFT.';
        const typewriterDestination = document.querySelector('.formSection__subtitle');

        textTypingEffect(typewriterText, typewriterDestination);
    });
};

export { FormSection };
