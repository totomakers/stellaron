import { BASE_PATH, readAndParse } from '../utils/loadData'
import { join } from 'node:path'
import z from 'zod'

import hbs from 'handlebars'
import templateInput from './relic-sets.sql.hbs'
import { writeToOutput } from '../utils/writeToOutput'
import { useText } from '../utils/useText'
import { green } from 'kolorist'
import { RelicSetSkillConfigValueSchema } from '../../adapters/StarRailData/schemas/RelicSetSkillConfig.schema.generated'
import { RelicSetConfigValueSchema } from '../../adapters/StarRailData/schemas/RelicSetConfig.schema.generated'
import { RelicSet, RelicSetEffect } from './relic-sets.schema'
import { getStableHash } from '../../adapters/StarRailData/getStableHash'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

const parseRawData = () => {
  return {
    relicSetConfig: readAndParse(
      join(BASE_PATH, 'RelicSetConfig.json'),
      z.record(z.string(), RelicSetConfigValueSchema),
    ),

    relicSetSkillConfig: readAndParse(
      join(BASE_PATH, 'RelicSetSkillConfig.json'),
      z.record(
        z.string(),
        z.record(z.string(), RelicSetSkillConfigValueSchema),
      ),
    ),
  }
}

const formatRawData = (data: ReturnType<typeof parseRawData>) => {
  const { getText } = useText()

  const relicSets = Object.values(data.relicSetConfig || {}).map((c) => {
    return {
      id: `${c.SetID}`,
      name: getText(c.SetName)!,
    } satisfies RelicSet
  })

  const relicSetEffects = Object.values(data.relicSetSkillConfig || {})
    .map((o) => Object.values(o))
    .flat()
    .map((r) => {
      return {
        id: `${r.SetID}${r.RequireNum}`,
        desc: getText({ Hash: getStableHash(r.SkillDesc) })!,
        relicSetId: `${r.SetID}`,
        requiredNum: r.RequireNum,
      } satisfies RelicSetEffect
    })

  return { relicSets, relicSetEffects }
}

const generateTemplate = (data: ReturnType<typeof formatRawData>) => {
  const compiled = template({
    relicSets: data.relicSets,
    relicSetEffects: data.relicSetEffects,
  })

  return compiled
}

export const generateRelicSets = () => {
  const rawData = parseRawData()
  const formattedData = formatRawData(rawData)
  const compiled = generateTemplate(formattedData)

  console.log(green(`${formattedData.relicSets.length} relic sets`))
  console.log(
    green(`${formattedData.relicSetEffects.length} relic set effects`),
  )

  writeToOutput('relic-sets.sql', compiled)
}
