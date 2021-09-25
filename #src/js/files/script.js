const video = document.querySelector('.video-home__video');
//==================================<Прослушка кликов>================================================================================================//
window.onload = function () {
    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        //Работа с видео
        if (targetElement.classList.contains('video-home__play-button') || targetElement.classList.contains('video-home__video')) {
            if (video.paused) {
                video.play();
                targetElement.closest('.video-home').classList.remove('video-home_stop');
                targetElement.closest('.video-home').classList.add('video-home_playing');
            } else {
                video.pause();
                targetElement.closest('.video-home').classList.remove('video-home_playing');
                targetElement.closest('.video-home').classList.add('video-home_stop');
            }
        }
    }
}

//===========================<Слайдеры>=============================//
new Swiper('.slider-reviews__slider', {
    direction: "vertical",
    slidesPerView: 2,
    navigation: {
        nextEl: ".slider-reviews__button-prev",
        prevEl: ".slider-reviews__button-next",
    },
    loop: true,
    breakpoints: {
        320: {
            spaceBetween: 10,
        },
        479.98: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 70,
        }
    }
});


let textSliderTeam = new Swiper('.team__slider-text', {
    simulateTouch: false,
    initialSlide: 1,
    autoHeight: true,
});
let imageSliderTeam = new Swiper('.team__slider-image', {
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    initialSlide: 1,
});
imageSliderTeam.controller.control = textSliderTeam;
textSliderTeam.controller.control = imageSliderTeam;