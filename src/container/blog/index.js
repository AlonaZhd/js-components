import {
  createElement,
  createHeader,
  createPost,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'My blog')
page.append(title)

const post = createPost()
page.append(post)
