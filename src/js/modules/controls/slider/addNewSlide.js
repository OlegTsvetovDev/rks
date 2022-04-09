// TODO: дефект - не добавляется больше 3 слайдов
// TODO: создать пустой слайдер и потом в него сложить все ноды, включая базовую?
function addNewSlide(newNode) {
  $('.queue_slider').slick('slickAdd', queueCount + 1, newNode)
  // newNode.setAttribute('data-slick-index', queueCount)
  // $('.queue_slider').slick('slickAdd', '<div><h3>' + queueCount + '</h3></div>')
}

export default addNewSlide
