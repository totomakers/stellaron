import { BASE_PATH, readAndParse } from '../utils/loadData'
import { join } from 'node:path'
import z from 'zod'

import hbs from 'handlebars'
import templateInput from './light-cones.sql.hbs'
import { writeToOutput } from '../utils/writeToOutput'
import { useText } from '../utils/useText'
import { green } from 'kolorist'
import { EquipmentConfigValueSchema } from '../../adapters/StarRailData/schemas/EquipmentConfig.schema.generated'
import { LightCone } from './light-cones.schema'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

const parseRawData = () => {
  return {
    equipmentConfig: readAndParse(
      join(BASE_PATH, 'EquipmentConfig.json'),
      z.record(z.string(), EquipmentConfigValueSchema),
    ),
  }
}

const formatRawData = (data: ReturnType<typeof parseRawData>) => {
  const { getText } = useText()

  const lightCones = Object.values(data.equipmentConfig || {}).map((c) => {
    return {
      id: `${c.EquipmentID}`,
      name: getText(c.EquipmentName)!,
      path: c.AvatarBaseType,
      rarity: c.Rarity,
    } satisfies LightCone
  })

  return lightCones
}

const generateTemplate = (data: ReturnType<typeof formatRawData>) => {
  const compiled = template({
    lightCones: data,
  })

  return compiled
}

export const generateLightCones = () => {
  const rawData = parseRawData()
  const formattedData = formatRawData(rawData)
  const compiled = generateTemplate(formattedData)

  console.log(green(`${formattedData.length} light-cones`))
  writeToOutput('light-cones.sql', compiled)
}
