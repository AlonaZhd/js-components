document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')
  const email = document.getElementById('email')

  if (!email.checkValidity()) {
    if (email.ariaValueMax.length === 0) {
      email.setCustomValidity(
        'Помилка. Введіть корректне значення',
      )
    }
    email.reportValidity()
  }

  if (form.reportValidity()) {
    form.submit()
  } else {
    form.reset()
  }
}

document
  .querySelectorAll('.form__button-add')
  .forEach((element) => {
    // console.log(element)

    element.onclick = () => {
      if (element.getAttribute('operator') === '+') {
        return age.stepUp(
          Number(element.getAttribute('value')),
        )
      }

      if (element.getAttribute('operator') === '-') {
        return age.stepDown(
          Number(element.getAttribute('value')),
        )
      }
    }
  })

document.querySelector('.form__button-save').onclick =
  () => {
    const value = document.getElementById('username').value

    if (value.length === 0) alert('Даних немає')

    navigator.clipboard
      .writeText(value)
      .then(() => alert('Дані збережено'))

    console.log(value)
  }

// const listener = () => {
//   alert('click')
// }

// document
//   .querySelector('.form__button')
//   .addEventListener('click', listener)

const outer = document.getElementById('outer')
const inner = document.getElementById('inner')

outer.addEventListener(
  'click',
  () => alert('Capture phase (фаза захоплення) outer'),
  {
    capture: true,
  },
)

inner.addEventListener(
  'click',
  () => alert('Capture phase (фаза захоплення) inner'),
  {
    capture: true,
  },
)

outer.addEventListener(
  'click',
  () => alert('Bubble phase (фаза спливання) outer'),
  {
    capture: false,
    once: true,
  },
)

inner.addEventListener(
  'click',
  () => alert('Bubble phase (фаза спливання) inner'),
  {
    capture: false,
    once: true,
  },
)

// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     console.log(e)
// })

const button = document.querySelector('.form__button')

const myEvent = new CustomEvent('myevent', {
  detail: { id: 100 },
})

button.addEventListener('myevent', (e) => {
  console.log(e)
})

button.dispatchEvent(myEvent)
