import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'My blog')
page.append(title)

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

const createPost = () => {
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

const post = createPost()
page.append(post)
