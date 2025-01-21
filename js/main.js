const buttons = document.querySelectorAll('.like__button');

function updateButtonStates() {
    buttons.forEach((button, index) => {
        if (localStorage.getItem(`button-${index}`) === 'active') {
            button.classList.add('like__button-active');
        } else {
            button.classList.remove('like__button-active');
        }
    });
}

updateButtonStates();

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        button.classList.toggle('like__button-active');

        if (button.classList.contains('like__button-active')) {
            localStorage.setItem(`button-${index}`, 'active');
        } else {
            localStorage.removeItem(`button-${index}`);
        }
    });
});
