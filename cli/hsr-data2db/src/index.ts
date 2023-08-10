import prompts, { PromptObject } from 'prompts'

import './handlebars'

import { doJobs, jobs } from './jobs'
import { degitStarRailData } from './adapters/StarRailData/fetch'
import { generateAllSchemas } from './adapters/StarRailData/generateSchema'

import path from 'node:path'
import { DEST_SCHEMA_FOLDER } from './adapters/StarRailData/config'
import { writeTsFile } from './utils'

const handleFetch = async () => {
  await degitStarRailData()
}

const handleGenerateTypes = async () => {
  const output = await generateAllSchemas()

  await Promise.all(
    output.map(async (o) => {
      const dest = path.join(
        DEST_SCHEMA_FOLDER,
        `${o.name}.schema.generated.ts`,
      )
      const input = o.generated.lines.join('\n')

      return writeTsFile(dest, input)
    }),
  )
}

const handleGenerateSql = async () => {
  // @TODO
}

const handleAll = async () => {
  console.time('all')
  await doJobs([...jobs])
  console.timeEnd('all')
}

// =============
const initPrompt = {
  type: 'select',
  name: 'step',
  message: 'Hello travelers - what you want to do ?',
  choices: [
    { title: '⏬ Download source', value: 'fetch' },
    { title: '🚀 Generate types', value: 'generate:types' },
    { title: '✅ Generate Stellaron SQL', value: 'generate:sql' },
    { title: '🧠 Pull & Update & Generate', value: 'do-all' },
  ],
} satisfies PromptObject

async function init() {
  try {
    // Prompts
    const { step } = await prompts(initPrompt)

    if (step === 'fetch') await handleFetch()
    if (step === 'generate:types') await handleGenerateTypes()
    if (step === 'generate:sql') await handleGenerateSql()
    if (step === 'do-all') await handleAll()
  } catch (cancelled: unknown) {
    console.log((cancelled as Error).message)
    return
  }
}

init().catch((e) => {
  console.error(e)
})
