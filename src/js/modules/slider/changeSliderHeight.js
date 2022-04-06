// изменение высоты слайдера
function changeSliderHeight(action, value) {
  setTimeout(() => {
    const slickList = document.querySelector('.slick-list')
    const slickCurrent = slickList.querySelector('.slick-current')
    const slickCurrentHeight = getComputedStyle(slickCurrent).height

    slickList.style.height = slickCurrentHeight
  }, 0)
}


export default changeSliderHeight
