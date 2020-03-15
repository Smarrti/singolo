const navUrl = document.querySelectorAll('.head-content-menu ul li');

navUrl.forEach(e => {
    e.addEventListener('click', () => {
        navUrl.forEach((e) => {
            e.classList.remove('head-content-menu-selected');
        });
        e.classList.add('head-content-menu-selected');
    })
})

const sliderButton = document.querySelectorAll('.slider-button');
const slider = document.querySelector('.slider');

sliderButton.forEach(e => {
    e.addEventListener('click', () => {
        const sliderBlue = document.querySelector('.slider_second');
        const sliderRed = document.querySelector('.slider_first');
        if (slider.classList.contains('slider_blue')) {
            slider.classList.remove('slider_blue');
            sliderBlue.classList.add('slider_hidden');
            sliderRed.classList.remove('slider_hidden');

        } else {
            slider.classList.add('slider_blue');
            sliderRed.classList.add('slider_hidden');
            sliderBlue.classList.remove('slider_hidden');
        }
    })
})

const screenVertical = document.querySelector('.slider-img-vertical-background');
const phoneVertical = document.querySelector('.slider-img-vertical');
const screenHorizontal = document.querySelector('.slider-img-horizontal-background');
const phoneHorizontal = document.querySelector('.slider-img-horizontal');


phoneVertical.addEventListener('click', () => {
    if (screenVertical.getAttribute('src')) {
        screenVertical.setAttribute('src', '');
    } else {
        screenVertical.setAttribute('src', 'assets/phone/background-vertical.png');
    }
});

phoneHorizontal.addEventListener('click', () => {
    if (screenHorizontal.getAttribute('src')) {
        screenHorizontal.setAttribute('src', '');
    } else {
        screenHorizontal.setAttribute('src', 'assets/phone/background-horizontal.png');
    }
});