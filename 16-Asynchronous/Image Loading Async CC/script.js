const imagesContainer = document.querySelector('.images')
const imgPaths = [
  '/starter/img/img-1.jpg',
  '/starter/img/img-2.jpg',
  '/starter/img/img-3.jpg',
]

const img1 = '/starter/img/img-1.jpg'
const img2 = '/starter/img/img-2.jpg'
const img3 = '/starter/img/img-3.jpg'

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImg = document.createElement('img')

    newImg.onload = function () {
      resolve(newImg)
    }

    newImg.onerror = function () {
      reject(new Error('Image cannot load.'))
    }

    newImg.src = imgPath
  })
}

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

// let chain = Promise.resolve()

// imgPaths.forEach((imgPath, index) => {
//   chain = chain.then(() => {
//     createImage(imgPath).then((image) => {
//       document.body.appendChild(image)

//       if (index < imgPaths.length - 1) {
//         return wait(2).then(() => {
//           image.style.display = 'none'
//         })
//       }
//     })
//   })
// })

// chain.catch((err) => console.error(err))

//CODING CHALLENGE #3

const loadNPause = async function () {
  try {
    const first = await createImage(img1)
    imagesContainer.append(first)
    wait(2).then(async () => {
      first.style.display = 'none'

      const second = await createImage(img2)
      imagesContainer.append(second)
      wait(2).then(async () => {
        second.style.display = 'none'
        const third = await createImage(img3)
        imagesContainer.append(third)
      })
    })
  } catch (error) {
    console.error(error.message)
  }
}

// loadNPause()

const loadAll = async function (imgsArr) {
  const imgs = imgsArr.map((img) => createImage(img))

  // Promise.allSettled([createImage(img1), createImage(img2), createImage(img3)])
  const parallel = await Promise.all(imgs)

  parallel.forEach((img) => {
    imagesContainer.append(img)
    img.classList.add('parallel')
  })
}

loadAll(imgPaths)
