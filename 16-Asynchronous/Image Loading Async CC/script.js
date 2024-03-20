const imgPaths = [
  '/16-Asynchronous/starter/img/img-1.jpg',
  '/16-Asynchronous/starter/img/img-2.jpg',
  '/16-Asynchronous/starter/img/img-3.jpg',
]

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

let chain = Promise.resolve()

imgPaths.forEach((imgPath, index) => {
  chain = chain.then(() => {
    createImage(imgPath).then((image) => {
      document.body.appendChild(image)

      if (index < imgPaths.length - 1) {
        return wait(2).then(() => {
          image.style.display = 'none'
        })
      }
    })
  })
})

chain.catch((err) => console.error(err))

//CODING CHALLENGE #3

//PART 1
