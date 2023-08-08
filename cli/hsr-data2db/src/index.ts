import prompts, { PromptObject } from 'prompts'
import { degitStarRailRes } from './StarRailRes'
import { parseAndTransformLightCones } from './light-cones/light-cones'
import { parseAndTransformCharacters } from './characters/characters'
import { parseAndTransformItems } from './items/items'
import { parseAndTransformRelics } from './relics/relics'
import './handlebars'

const initialPrompt = {
  type: 'select',
  name: 'step',
  message: 'Hello travelers - what you want to do ?',
  choices: [
    { title: '🚀 All', value: 'all' },
    { title: '✅ Specific', value: 'specific' },
    { title: '🧠 Debug', value: 'debug' },
  ],
} satisfies PromptObject

const actionsPrompt = {
  type: 'multiselect',
  name: 'actions',
  message: 'Select what you want',
  choices: [
    { title: 'LightCones', value: 'light-cones' },
    { title: 'Characters', value: 'characters' },
    { title: 'Items', value: 'items' },
    { title: 'Relics', value: 'relics' },
  ],
} satisfies PromptObject

const debugPrompt = {
  type: 'select',
  name: 'script',
  message: 'Select what you want do',
  choices: [
    {
      title: '⏬ Fetch StarRailRes',
      value: 'fetch-StarRailRes',
    },
  ],
} satisfies PromptObject

const handleDebug = async () => {
  const { script } = await prompts(debugPrompt)

  if (script === 'fetch-StarRailRes') await degitStarRailRes()
}

const handleSpecific = async () => {
  const { actions } = await prompts(actionsPrompt)

  if (!Array.isArray(actions) || actions.length === 0) {
    return
  }

  await degitStarRailRes()

  if (actions.includes('light-cones')) {
    parseAndTransformLightCones()
  }

  if (actions.includes('characters')) {
    parseAndTransformCharacters()
  }

  if (actions.includes('items')) {
    parseAndTransformItems()
  }

  if (actions.includes('relics')) {
    parseAndTransformRelics()
  }
}

const handleAll = async () => {
  console.time('all')

  // Fetch starRailRes
  await degitStarRailRes()

  parseAndTransformCharacters()
  parseAndTransformLightCones()
  parseAndTransformItems()
  parseAndTransformRelics()

  console.timeEnd('all')
}

async function init() {
  try {
    // Prompts
    const { step } = await prompts(initialPrompt)

    if (step === 'all') await handleAll()
    if (step === 'specific') await handleSpecific()
    if (step === 'debug') await handleDebug()
  } catch (cancelled: unknown) {
    console.log((cancelled as Error).message)
    return
  }
}

init().catch((e) => {
  console.error(e)
})
