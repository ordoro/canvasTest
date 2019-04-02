const {promisify} = require('util')
const fs = require('fs')
const {createCanvas, loadImage} = require('canvas')

async function toBuffer(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBuffer((err, buffer) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(buffer)
      }
    })
  })
}

const writeFile = promisify(fs.writeFile)

async function main() {
  try {
    const image = await loadImage('./assets/looks_fine.gif')
    const x = 0
    const y = 0
    const width = image.width
    const height = image.height

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, x, y, width, height);

    const buffer = await toBuffer(canvas)

    await writeFile('./output/messed_up.gif', buffer)
  }
  catch (err) {
    console.error(err)
  }
}

main()
