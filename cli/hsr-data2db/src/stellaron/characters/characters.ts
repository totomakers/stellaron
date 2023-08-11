import { AvatarConfigValueSchema } from '../../adapters/StarRailData/schemas/AvatarConfig.schema.generated'
import { BASE_PATH, readAndParse } from '../utils/loadData'
import { join } from 'node:path'
import z from 'zod'
import { CharacterSchema } from './characters.schema'
import hbs from 'handlebars'
import templateInput from './characters.sql.hbs'
import { writeToOutput } from '../utils/writeToOutput'
import { useText } from '../utils/useText'
import { green } from 'kolorist'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

const parseRawData = () => {
  return {
    avatarConfig: readAndParse(
      join(BASE_PATH, 'AvatarConfig.json'),
      z.record(z.string(), AvatarConfigValueSchema),
    ),
  }
}

const formatRawData = (data: ReturnType<typeof parseRawData>) => {
  const { getText } = useText()

  const characters = Object.values(data.avatarConfig || {}).map((c) => {
    return {
      id: `${c.AvatarID}`,
      damageType: c.DamageType,
      name: getText(c.AvatarName) ?? null,
      path: c.AvatarBaseType,
      rarity: c.Rarity,
    } satisfies CharacterSchema
  })

  return characters
}

const generateTemplate = (data: ReturnType<typeof formatRawData>) => {
  const compiled = template({
    characters: data,
  })

  return compiled
}

export const generateCharacters = () => {
  const rawData = parseRawData()
  const formattedData = formatRawData(rawData)
  const compiled = generateTemplate(formattedData)

  console.log(green(`${formattedData.length} characters`))
  writeToOutput('characters.sql', compiled)
}
