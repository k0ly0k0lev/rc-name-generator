(function () {
    const ADJECTIVES = window.ADJECTIVES;
    const ANIMALS = window.ANIMALS;
    const INPUT_ID_QUERY = document.querySelector('#input');
    const GENERATE_BUTTON_ID = '#generate-btn';
    const COPY_BUTTON_ID = '#copy-btn';

    const releaseCandidateName = () => {
        const RANDOM_ADJECTIVE = Math.floor(Math.random() * ADJECTIVES.length);
        const RANDOM_ANIMAL = Math.floor(Math.random() * ANIMALS.length);

        return `${ADJECTIVES[RANDOM_ADJECTIVE]} ${ANIMALS[RANDOM_ANIMAL]}`
            .toLowerCase()
            .split(' ')
            .map(item => item.charAt(0).toUpperCase() + item.substr(1))
            .join(' ')
            .trim();
    }

    const write = () => {
        INPUT_ID_QUERY.focus();
        INPUT_ID_QUERY.value = releaseCandidateName();
    }

    const copy = () => {
        INPUT_ID_QUERY.select();
        document.execCommand('copy');
    }

    const applyEventListeners = (element_id, action) => {
        return document.querySelector(element_id).addEventListener('click', action);
    }

    applyEventListeners(GENERATE_BUTTON_ID, write);
    applyEventListeners(COPY_BUTTON_ID, copy);
})()
