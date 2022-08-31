import formHtml from './Form.html';
import './Form.scss';

const FormSection = (container) => {
    container.innerHTML += formHtml;
};

export { FormSection };
