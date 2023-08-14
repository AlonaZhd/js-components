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

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', type: 'atention' },
      { text: 'Нова', type: 'new' },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01.23',
  },
  {
    category: [{ text: 'Важливо', type: 'atention' }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '23.01.23',
  },
  {
    category: [{ text: 'Нова', type: 'new' }],
    info: `Коли хтось розповідає про відпустку – все, що ти можеш сказати знову й знову: "That's great!".`,
    date: '20.01.23',
  },
]

export const createPost = () => {
  const post = createElement('ul', 'post')

  POST_LIST.forEach((postData) => {
    const postItem = createElement('li', 'post__item')

    const postHeader = createElement('div', 'post__header')

    const postCategory = createElement(
      'div',
      'post__category',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `button button--${category.type}`,
        category.text,
      )
      postCategory.append(categorySpan)
    })

    // ===

    const dateSpan = createElement(
      'div',
      'post__date',
      postData.date,
    )
    postHeader.append(postCategory, dateSpan)

    // ===

    const postInfo = createElement(
      'p',
      'post__info',
      postData.info,
    )
    postItem.append(postHeader, postInfo)

    // ===

    post.append(postItem)
  })

  return post
}
