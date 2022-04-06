function isWebp(cb) {
  function testWebp(cb) {
    const webp = new Image()
    webp.onload = webp.onerror = function () {
      cb(webp.height == 2)
    }
    webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
  }

  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}


export default isWebp
