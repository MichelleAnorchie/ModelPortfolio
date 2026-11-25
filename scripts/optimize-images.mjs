
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const inputFolder = 'public/images'
const outputFolder = 'public/images-optimized'

async function optimiseImages(folder) {
  const entries = await fs.readdir(folder, { withFileTypes: true })

  for (const entry of entries) {
    const inputPath = path.join(folder, entry.name)

    if (entry.isDirectory()) {
      await optimiseImages(inputPath)
      continue
    }

    if (!/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      continue
    }

    const relativePath = path.relative(inputFolder, inputPath)
    const outputPath = path.join(
      outputFolder,
      relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    )

    await fs.mkdir(path.dirname(outputPath), { recursive: true })

    await sharp(inputPath)
      .rotate()
      .resize({
        width: 1800,
        withoutEnlargement: true,
      })
      .webp({ quality: 82, effort: 5 })
      .toFile(outputPath)

    console.log(`Optimised: ${relativePath}`)
  }
}

optimiseImages(inputFolder)
  .then(() => console.log('All images optimised successfully!'))
  .catch(console.error)
