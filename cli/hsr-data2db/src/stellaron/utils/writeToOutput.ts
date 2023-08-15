import fs from 'node:fs'
import path from 'node:path'

const OUTPUT_DIR = path.join('./output')

export const writeToOutput = (filename: string, content: string) => {
  const outputDir = path.join(OUTPUT_DIR)
  fs.mkdirSync(outputDir, {
    recursive: true,
  })

  fs.writeFileSync(path.join(outputDir, filename), content, {
    flag: 'w',
    encoding: 'utf-8',
  })
}
