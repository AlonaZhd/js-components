// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку
  const data = [
    {
      id: '10',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/6J- -NXulQCs',
      download_url: 'https://picsum.photos/id/10/2500/1667',
    },
    {
      id: '11',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/Cm7oKel-X2Q',
      download_url: 'https://picsum.photos/id/11/2500/1667',
    },
    {
      id: '12',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/I_9ILwtsl_k',
      download_url: 'https://picsum.photos/id/12/2500/1667',
    },
    {
      id: '13',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/3MtiSMdnoCo',
      download_url: 'https://picsum.photos/id/13/2500/1667',
    },
    {
      id: '14',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com /photos/IQ1kOQTJrOQ',
      download_url: 'https://picsum.photos/id/14/2500/1667',
    },
    {
      id: '15',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/NYDo21ssGao',
      download_url: 'https://picsum.photos/id/15/2500/1667',
    },
    {
      id: '16',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/gkT4FfgHO5o',
      download_url: 'https://picsum.photos/id/16/2500/1667',
    },
    {
      id: ' 17',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/Ven2CV8IJ5A',
      download_url: 'https://picsum.photos/id/17/2500/1667',
    },
    {
      id: '18',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: ' https://unsplash.com/photos/Ps2n0rShqaM',
      download_url: 'https://picsum.photos/id/18/2500/1667',
    },
    {
      id: '19',
      author: 'Пол Джарвіс',
      width: 2500,
      height: 1667,
      url: 'https:/ /unsplash.com/photos/P7Lh0usGcuk',
      download_url: 'https://picsum.photos/id/19/2500/1667',
    },
    {
      id: '20',
      author: 'Олексій Дорохович',
      width: 3670,
      height: 2462,
      url: 'https://unsplash.com/photos/nJdwUHmaY8A',
      download_url: 'https://picsum.photos/id/20/3670/2462',
    },
    {
      id: '21',
      author: 'Алехандро Ескамілла',
      width: 3008,
      height: 2008,
      url: 'https://unsplash.com/photos/jVb0mSn0LbE ',
      download_url: 'https://picsum.photos/id/21/3008/2008',
    },
    {
      id: '22',
      author: 'Алехандро Ескамілла',
      width: 4434,
      height: 3729,
      url: 'https://unsplash.com/photos/du_OrQAA4r0',
      download_url: 'https://picsum.photos/id/22/4434/3729',
    },
    {
      id: '23',
      author: 'Алехандро Ескамілла',
      width: 3887,
      height: 4899,
      url: 'https://unsplash.com/photos/8yqds_91OLw',
      download_url: 'https://picsum.photos/id/23/3887/4899',
    },
    {
      id: '24',
      author: 'Alejandro Escamilla',
      width: 4855,
      height: 1803,
      url: 'https://unsplash.com/photos/cZhUxIQjILg',
      download_url: 'https://picsum.photos/id/24/4855/1803',
    },
    {
      id: '25',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/Iuq0EL4EINY',
      download_url: 'https://picsum.photos/id/25/5000/3333',
    },
    {
      id: '26',
      author: 'Вадим Щербаков',
      width: 4209,
      height: 2769,
      url: 'https://unsplash.com /photos/tCICLJ5ktBE',
      download_url: 'https://picsum.photos/id/26/4209/2769',
    },
    {
      id: '27',
      author: 'Йоні Каплан-Надель',
      ' width': 3264,
      height: 1836,
      url: 'https://unsplash.com/photos/iJnZwLBOB1I',
      download_url: 'https://picsum.photos/id/27/3264/1836',
    },
    {
      id: '28',
      author: 'Джеррі Едні',
      width: 4928,
      height: 3264,
      url: 'https://unsplash.com/photos/_WiFMBRT7Aw',
      download_url: 'https://picsum.photos/id/28/4928/3264',
    },
    {
      id: '29',
      author: 'Go Wild',
      width: 4000,
      height: 2670,
      url: 'https://unsplash.com/photos/V0yAek6BgGk',
      download_url: 'https://picsum.photos/id/29/4000/2670',
    },
  ]
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('scroll', {
    // вказуємо назву контейнера
    name: 'scroll',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Scroll',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: data,
  })
  // ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
