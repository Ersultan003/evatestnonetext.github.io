const prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    slides = document.querySelectorAll('.mySlides'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
}

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 3500);


function myForm() {
    let popup = document.getElementById('myform'),
        popupToggle = document.getElementById('contact'),
        popupClose = document.querySelector('.form__close');

    popupToggle.onclick = function () {
        popup.style.display = "block";
        popup.style.overflow = "hidden";

    };
    popupClose.onclick = function () {
        popup.style.display = "none";
    }
}
myForm();

function adapMyForm() {
    let popup = document.getElementById('myform'),
        popupToggle = document.querySelector('.adapContact'),
        popupClose = document.querySelector('.form__close');

    popupToggle.onclick = function () {
        popup.style.display = "block";
    };
    popupClose.onclick = function () {
        popup.style.display = "none";
    }
}
adapMyForm();

function contactUs() {
    let contactUs = document.getElementById('contactUs'),
        contactToggle = document.getElementById('popupUs'),
        contactClose = document.querySelector('.contact__close');

    contactToggle.onclick = function () {
        contactUs.style.display = "block";
    };

    contactClose.onclick = function () {
        contactUs.style.display = "none";
    }

    window.onclick = function (e) {
        if (e.target == contactUs) {
            contactUs.style.display = "none";
        }
    }
}
contactUs();

function adapContactUs() {
    let contactUs = document.getElementById('contactUs'),
        contactToggle = document.querySelector('.adapPopupUs'),
        contactClose = document.querySelector('.contact__close');

    contactToggle.onclick = function () {
        contactUs.style.display = "block";
    };

    contactClose.onclick = function () {
        contactUs.style.display = "none";
    }
    window.onclick = function (e) {
        if (e.target == contactUs) {
            contactUs.style.display = "none";
        }
    }
}
adapContactUs();


function accardion() {
    let acc = document.getElementsByClassName('accordionBtn');
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        }
    }

}
accardion();





// let menuBtn = document.querySelector('.menu-btn');
// let headerMenu = document.querySelector('.menu');
// console.log(headerMenu)
// menuBtn.addEventListener('click', function () {
//     menuBtn.classList.toggle('active');
//     headerMenu.classList.toggle('active')
// });