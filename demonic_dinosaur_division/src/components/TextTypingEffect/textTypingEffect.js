const textTypingEffect = (text, node) => {
    /* function, that renders each letter */
    const typeTextFunc = () => {
        /* current letter */
        let i = 0;

        /* clear fallback (added in case JS is turned off) */
        node.innerHTML = '';

        let textTyping = setInterval(() => {
            node.innerHTML += text.substring(i, i + 1);
            i++;

            if (i > text.length) {
                clearInterval(textTyping);
            }
        }, 60);
    };

    /* play the effect when the text node appears at user's screen */
    if ('IntersectionObserver' in window) {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    typeTextFunc();
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            threshold: 0.25,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(node);
    } else {
        typeTextFunc();
    }
};

export { textTypingEffect };
