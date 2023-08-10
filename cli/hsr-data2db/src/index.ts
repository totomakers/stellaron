import prompts, { PromptObject } from 'prompts'

import './handlebars'

import { doJobs, jobs } from './jobs'
import { degitStarRailData } from './adapters/StarRailData/fetch'
import { generateAllSchemas } from './adapters/StarRailData/generateSchema'

import path from 'node:path'
import { DEST_SCHEMA_FOLDER } from './adapters/StarRailData/config'
import { writeTsFile } from './utils'
import { useCharacter } from './stellaron/character'
import { useText } from './stellaron/text'

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
  const { data: characterData } = useCharacter()
  const { getText } = useText()

  Object.values(characterData.avatarConfig ?? []).map((c) => {
    const itemConfig = characterData.itemConfigAvatar?.[c.AvatarID]
    const promotion = characterData.avatarPromotionConfig?.[c.AvatarID]

    const skills = Object.values(characterData.avatarSkillConfig || {}).filter(
      (_, index) => {
        const isCharacterSKill = Object.keys(
          characterData.avatarSkillConfig || {},
        )[index].startsWith(`${c.AvatarID}`)

        return isCharacterSKill
      },
    )

    if (!itemConfig || !promotion || !skills) return

    console.log(`======= ${c.AvatarID} =====`)
    console.log('rarity', c.Rarity)
    console.log('path', c.AvatarBaseType)
    console.log('name', getText(itemConfig.ItemName))
    console.log('stats at max', {
      hp: promotion['6'].HPBase.Value,
      atq: promotion['6'].AttackBase.Value,
      def: promotion['6'].DefenceBase.Value,
      speed: promotion['6'].SpeedBase.Value,
      critRate: promotion['6'].CriticalChance.Value,
      critDmg: promotion['6'].CriticalDamage.Value,
    })
    console.log(`skills (${Object.keys(skills).length})`)

    Object.values(skills).map((s, index) => {
      const firstLevel = Object.values(s).at(0)

      if (!firstLevel) return

      console.log('    ', `skills:${index}`)
      console.log('    ', 'type', firstLevel.AttackType)
      console.log('    ', 'name', getText(firstLevel.SkillName))
    })
  })
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
