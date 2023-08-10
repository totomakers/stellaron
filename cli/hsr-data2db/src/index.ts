import prompts, { PromptObject } from 'prompts'

import './handlebars'

import { degitStarRailData } from './adapters/StarRailData/fetch'
import { generateAllSchemas } from './adapters/StarRailData/generateSchema'

import path from 'node:path'
import { DEST_SCHEMA_FOLDER } from './adapters/StarRailData/config'
import { writeTsFile } from './utils'
import { generateCharacters } from './stellaron/characters/characters'
import { generateCharacterAbilities } from './stellaron/character-abilities/character-abilities'
import { generateCharacterTraces } from './stellaron/character-traces/character-traces'

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

// Sql Prompt

const sqlPrompt = {
  type: 'multiselect',
  name: 'sqls',
  message: 'Select sql file to update',
  choices: [
    { title: 'characters.sql', value: 'characters', selected: true },
    {
      title: 'character-abilities.sql',
      value: 'character-abilities',
      selected: true,
    },
    {
      title: 'characters-traces.sql',
      value: 'character-traces',
      selected: true,
    },
  ],
} satisfies PromptObject

const handleGenerateSql = async () => {
  const { sqls } = await prompts(sqlPrompt)

  if (!Array.isArray(sqls) || sqls.length === 0) return

  if (sqls.includes('characters')) generateCharacters()
  if (sqls.includes('character-abilities')) generateCharacterAbilities()
  if (sqls.includes('character-traces')) generateCharacterTraces()
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
  ],
} satisfies PromptObject

async function init() {
  try {
    // Prompts
    const { step } = await prompts(initPrompt)

    if (step === 'fetch') await handleFetch()
    if (step === 'generate:types') await handleGenerateTypes()
    if (step === 'generate:sql') await handleGenerateSql()
  } catch (cancelled: unknown) {
    console.log((cancelled as Error).message)
    return
  }
}

init().catch((e) => {
  console.error(e)
})
