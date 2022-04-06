// инициализация слайдера
function initSlider() {
    return $('.slider').slick({
            nextArrow: '<button type="button" class="slick-arrow slick-next btn dark_btn">Далее</button>',
            prevArrow: '<button type="button" class="slick-arrow slick-prev btn">Назад</button>',
            dots: true,
            infinite: false,
            draggable: false,
            adaptiveHeight: true,
            initialSlide: 0
          })
}


export default initSlider
