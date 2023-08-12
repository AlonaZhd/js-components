class Nav {
  static #HOME_PAGE = 'https://www.google.com/'

  static #back = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return history.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Enter URL adress')
      console.log(e)
    }
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static init = () => {
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()
