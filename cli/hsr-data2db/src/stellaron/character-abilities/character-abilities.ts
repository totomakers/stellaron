import { z } from 'zod'
import { BASE_PATH, readAndParse } from '../utils/loadData'
import { join } from 'node:path'
import { AvatarSkillConfigValueSchema } from '../../adapters/StarRailData/schemas/AvatarSkillConfig.schema.generated'
import hbs from 'handlebars'
import templateInput from './character-abilities.sql.hbs'
import { writeToOutput } from '../utils/writeToOutput'
import { useText } from '../utils/useText'
import { CharacterAbility } from './character-abilities.schema'
import { green } from 'kolorist'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

const parseRawData = () => {
  const raw = {
    avatarSkillConfig: readAndParse(
      join(BASE_PATH, 'AvatarSkillConfig.json'),
      z.record(z.record(z.string(), AvatarSkillConfigValueSchema)),
    ),
  }

  return raw
}

const formatRawData = (rawData: ReturnType<typeof parseRawData>) => {
  const { getText } = useText()

  const characterAbilities = Object.values(rawData.avatarSkillConfig || {})
    .map((skill) => {
      const skillsLevels = Object.values(skill)

      const firstLevel = skillsLevels.at(0)

      if (!firstLevel) return

      return {
        id: `${firstLevel.SkillID}`,
        characterId: `${firstLevel.SkillID}`.substring(0, 4),
        effectType: firstLevel.SkillEffect,
        name: getText(firstLevel.SkillName) ?? null,
        type: firstLevel.AttackType ?? null,
      } satisfies CharacterAbility
    })
    .filter((ca) => ca && ca?.type !== 'MazeNormal')

  return characterAbilities
}

const generateTemplate = (data: ReturnType<typeof formatRawData>) => {
  const compiled = template({
    characterAbilities: data,
  })

  return compiled
}

export const generateCharacterAbilities = () => {
  const rawData = parseRawData()
  const formattedData = formatRawData(rawData)
  const compiled = generateTemplate(formattedData)

  console.log(green(`${formattedData.length} character-abilities`))
  writeToOutput('character-abilities.sql', compiled)
}
