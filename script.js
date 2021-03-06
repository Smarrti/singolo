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

const portfolioTags = document.querySelectorAll('.portfolio-tags li');
const portfolioImages = document.querySelectorAll('.portfolio-images img');

portfolioTags.forEach((e) => {
    e.addEventListener('click', (event) => {
        portfolioTags.forEach(e => {
            e.classList.remove('portfolio-tags_active');
        });
        event.target.classList.add('portfolio-tags_active');
        let random = [];
        for (let i = 0; i < 12; i++) {
            let randomNumber = Math.floor(Math.random() * Math.floor(12));
            while(random.indexOf(randomNumber) !== -1) {
                randomNumber = Math.floor(Math.random() * Math.floor(12));
            }              
            random.push(randomNumber);
        }
        let imagesBlock = document.querySelector('.portfolio-images');
        while (imagesBlock.firstChild) {
            imagesBlock.removeChild(imagesBlock.firstChild);
        }
        random.forEach((e) => {
            imagesBlock.appendChild(portfolioImages[e]);
        })
    })
})

portfolioImages.forEach((e) => {
    e.addEventListener('click', (event) => {
        if (event.target.classList.contains('portfolio-image_bordered')) {
            event.target.classList.remove('portfolio-image_bordered');
        } else {
            portfolioImages.forEach((e) => {
                e.classList.remove('portfolio-image_bordered');
            })
            event.target.classList.add('portfolio-image_bordered');
        }
    })
})

const formSubmit = document.querySelector('.form-inputs button');
formSubmit.addEventListener('click', (e) => {
    if ((document.querySelector('input[name=form-name]').checkValidity()) && (document.querySelector('input[name=form-email]').checkValidity())) {        
        e.preventDefault();
        let subject = document.querySelector('input[name=form-subject]').value;
        let message = document.querySelector('textarea[name=form-message]').value;
        let modal = document.querySelector('.modal');
        let modalMessage = document.querySelector('.modal-message');
        while(modalMessage.firstChild) {
            modalMessage.removeChild(modalMessage.firstChild);
        }
        if (subject != '') {
            modalMessage.innerHTML += '<p>Тема: ' + subject + '</p>';
        } else {
            modalMessage.innerHTML += '<p>Без темы</p>';
        }
        if (message != '') {
            modalMessage.innerHTML += '<p>Описание: ' + subject + '</p>';
        } else {
            modalMessage.innerHTML += '<p>Без описания</p>';
        }
        modal.classList.remove('modal_closed');
        const formItems = document.querySelectorAll('.form-inputs > *');
        formItems.forEach((e) => {
            e.value = ''
        });
    }
})

document.querySelector('.modal-hide').addEventListener('click', () => {
    let modal = document.querySelector('.modal');
    modal.classList.add('modal_closed');
})

document.querySelector('.modal').addEventListener('click', () => {
    let modal = document.querySelector('.modal');
    modal.classList.add('modal_closed');
})

let burgerButton = document.querySelector('.head-content-burger');
let sidebar = document.querySelector('.sidebar-wrapper');
burgerButton.addEventListener('click', () => {
    if (!burgerButton.classList.contains('head-content-burger_active')) {
        burgerButton.classList.add('head-content-burger_active');
        sidebar.classList.add('sidebar-wrapper_opened');
        document.querySelector('body').classList.add('overflow-hidden');
    } else {
        burgerButton.classList.remove('head-content-burger_active');
        sidebar.classList.remove('sidebar-wrapper_opened');
        document.querySelector('body').classList.remove('overflow-hidden');
    }
})

let sidebarMenu = document.querySelectorAll('.sidebar-menu__url');
sidebarMenu.forEach((e) => {
    e.addEventListener('click', (event) => {
        sidebarMenu.forEach((e) => {
            e.classList.remove('sidebar-menu__url_selected');
        })
        event.target.classList.add('sidebar-menu__url_selected');
        burgerButton.querySelector('img').click();
    })
})