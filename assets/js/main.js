const app = () => {
    const swiperSlides = document.querySelectorAll('.swiper-slide');
    swiperSlides.forEach((swiperSlide, index) => {
        const dataTitle = swiperSlide.getAttribute('data-title');
        console.log(dataTitle, index);
    })

    const swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheel: true,
        parallax: true,
        speed: 600,
    });

}

document.addEventListener('DOMContentLoaded', app);