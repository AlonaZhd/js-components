export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  { width: 24, height: 24, src: '/svg/arrow-back.svg' },
  {
    width: 24,
    height: 24,
    src: '/img/profile.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button')

    const img = createElement('img')

    console.log(Object.entries(params))

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)
    header.append(button)
  })

  return header
}

export const createPost = () => {
  const post = createElement('ul', 'post')
  return post
}

export const createPostItem = () => {
  const post__item = createElement('li', 'post__item')

  const post__header = createElement('div', 'post__header')

  const post__date = createElement(
    'div',
    'post__date',
    '25.01.23',
  )

  const post__category = createElement(
    'div',
    'post__category',
  )

  const span1 = createElement(
    'span',
    'button button--atention',
    'Важливо',
  )

  const span2 = createElement(
    'span',
    'button button--new',
    'Нова',
  )

  const post__info = createElement(
    'p',
    'post__info',
    'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
  )

  post__category.append(span2)
  post__category.append(span1)
  post__header.append(post__category)
  post__header.append(post__date)
  post__item.append(post__header)
  post__item.append(post__info)

  return post__item
}
