import {
  quicktype,
  jsonInputForTargetLanguage,
  InputData,
} from 'quicktype-core'

import { fdir } from 'fdir'
import fs from 'node:fs'
import path from 'node:path'
import { DEST_SCHEMA_FOLDER } from './config'
import fsExtra from 'fs-extra'

const getAllFiles = () => {
  const crawler = new fdir().normalize().glob('./**/*.json')
  const results = crawler.crawl('./temp/StairRailData/ExcelOutput')

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
    generated,
  }
}

export const generateAllSchemas = async () => {
  fsExtra.emptyDirSync(DEST_SCHEMA_FOLDER)

  const allFiles = getAllFiles()

  return Promise.all(
    allFiles.map(async (f) => {
      const finalPath = path.join('./temp/StairRailData/ExcelOutput', f)
      return generateSchema(finalPath)
    }),
  )
}
