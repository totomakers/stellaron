import prompts, { PromptObject } from 'prompts'

import './handlebars'

import { Job, doJobs, jobs } from './jobs'
import { degitStarRailRes } from './adapters/StarRailRes/StarRailRes.fetch'

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

const specificPrompt = {
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
  const { actions } = await prompts(specificPrompt)

  if (Array.isArray(actions)) {
    await doJobs(actions as Job[])
  }
}

const handleAll = async () => {
  console.time('all')
  await doJobs([...jobs])
  console.timeEnd('all')
}

// =============

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
