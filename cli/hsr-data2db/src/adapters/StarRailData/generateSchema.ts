import {
  quicktype,
  jsonInputForTargetLanguage,
  InputData,
} from 'quicktype-core'

import { fdir } from 'fdir'
import fs from 'node:fs'
import path from 'node:path'
import { STAR_RAIL_DATA_DIR } from './config'

const getAllFiles = () => {
  const crawler = new fdir().normalize().glob('./**/*.json')
  const results = crawler.crawl(path.join(STAR_RAIL_DATA_DIR, '/ExcelOutput'))

  return results.sync()
}

const generateSchema = async (filePath: string) => {
  const name = path.parse(filePath).name

  const content = fs.readFileSync(filePath).toString('utf-8')

  const jsonInput = jsonInputForTargetLanguage('typescript-zod')
  await jsonInput.addSource({
    name: name,
    samples: [content],
  })

  const inputData = new InputData()
  inputData.addInput(jsonInput)

  const generated = await quicktype({
    inputData,
    lang: 'typescript-zod',
  })

  return {
    name: name,
    path: filePath,
    generated,
  }
}

export const generateAllSchemas = async () => {
  const allFiles = getAllFiles()

  console.log(`Find ${allFiles.length} files`)

  return Promise.all(
    allFiles.map(async (f) => {
      const finalPath = path.join(STAR_RAIL_DATA_DIR, '/ExcelOutput', f)
      return generateSchema(finalPath)
    }),
  )
}
