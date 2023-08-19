class Slider {
  static #list = null
  static #left = null
  static #right = null

  static #count = 1
  static #max = null

  static init = () => {
    this.#list = document.querySelector('.slider__list')
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )
    this.#max = this.#list.childElementCount

    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#list.offsetWidth
    const scrollLeft = this.#list.scrollLeft
    const scrollWidth = this.#list.scrollWidth

    let scroll = 0

    if (side === 'left') {
      if (this.#count === 1 || scrollLeft === 0) {
        this.#count = this.#max
        scroll = (this.#count - 1) * offsetWidth
      } else {
        this.#count -= 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    if (side === 'right') {
      if (
        this.#count === this.#max ||
        scrollLeft === scrollWidth - offsetWidth
      ) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    this.#list.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}

Slider.init()
