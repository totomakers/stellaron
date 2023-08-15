import { BASE_PATH, readAndParse } from '../utils/loadData'
import { join } from 'node:path'
import z from 'zod'

import hbs from 'handlebars'
import templateInput from './relics.sql.hbs'
import { writeToOutput } from '../utils/writeToOutput'
import { useText } from '../utils/useText'
import { green } from 'kolorist'
import { RelicConfigValueSchema } from '../../adapters/StarRailData/schemas/RelicConfig.schema.generated'
import { RelicDataInfoValueSchema } from '../../adapters/StarRailData/schemas/RelicDataInfo.schema.generated'
import { Relic } from './relics.schema'
import { getStableHash } from '../../adapters/StarRailData/getStableHash'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

const parseRawData = () => {
  return {
    relics: readAndParse(
      join(BASE_PATH, 'RelicConfig.json'),
      z.record(z.string(), RelicConfigValueSchema),
    ),
    relicDataInfo: readAndParse(
      join(BASE_PATH, 'RelicDataInfo.json'),
      z.record(z.string(), RelicDataInfoValueSchema),
    ),
  }
}

const formatRawData = (data: ReturnType<typeof parseRawData>) => {
  const { getText } = useText()
  const relicDataInfoFlat = Object.values(data.relicDataInfo || {}).flat()

  const rawRelics = relicDataInfoFlat
    .map((relic) => {
      return Object.values(relic)
    })
    .flat()

  const relics = rawRelics.map((r) => {
    if (!r) return

    return {
      id: r.RelicName.split('RelicName_')[1],
      relicSetId: `${r.SetID}`,
      type: r.Type,
      name: getText({ Hash: getStableHash(r.RelicName) })!,
    } satisfies Relic
  })

  return { relics }
}

const generateTemplate = (data: ReturnType<typeof formatRawData>) => {
  const compiled = template({
    relics: data.relics,
  })

  return compiled
}

export const generateRelics = () => {
  const rawData = parseRawData()
  const formattedData = formatRawData(rawData)
  const compiled = generateTemplate(formattedData)

  console.log(green(`${formattedData.relics.length} relics`))

  writeToOutput('relics.sql', compiled)
}
