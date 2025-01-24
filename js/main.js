
//ЛАЙКИ НА КАРТОЧКАХ
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


//СВАЙПЕР

const swiper = new Swiper('.team__swiper', {
    loop: false,

    navigation: {
        nextEl: '.team__next',
        prevEl: '.team__prev',
    },
});


//ПАГИНАЦИЯ
const paginationBullets = document.querySelectorAll('.pagination__bullet');

function updatePagination() {
    paginationBullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === swiper.activeIndex);
    });
}

updatePagination();
swiper.on('slideChange', updatePagination);


//КНОПОЧКИ

function updateNavigationButtons() {
    const prevButton = document.querySelector('.team__prev');
    const nextButton = document.querySelector('.team__next');

    
    if (swiper.isBeginning) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (swiper.isEnd) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

updateNavigationButtons();

swiper.on('slideChange', updateNavigationButtons);

