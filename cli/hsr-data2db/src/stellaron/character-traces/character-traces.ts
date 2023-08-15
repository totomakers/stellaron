import { z } from 'zod'
import { BASE_PATH, readAndParse } from '../utils/loadData'
import { join } from 'node:path'
import { AvatarSkillConfigValueSchema } from '../../adapters/StarRailData/schemas/AvatarSkillConfig.schema.generated'
import { AvatarSkillTreeConfigValueSchema } from '../../adapters/StarRailData/schemas/AvatarSkillTreeConfig.schema.generated'
import { getStableHash } from '../../adapters/StarRailData/getStableHash'
import { CharacterTrace } from './character-traces.schema'
import hbs from 'handlebars'
import templateInput from './character-traces.sql.hbs'
import { useText } from '../utils/useText'
import { writeToOutput } from '../utils/writeToOutput'
import { green } from 'kolorist'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

const parseRawData = () => {
  const raw = {
    avatarSkillTreeConfig: readAndParse(
      join(BASE_PATH, 'AvatarSkillTreeConfig.json'),
      z.record(z.record(z.string(), AvatarSkillTreeConfigValueSchema)),
    ),
    avatarSkillConfig: readAndParse(
      join(BASE_PATH, 'AvatarSkillConfig.json'),
      z.record(z.record(z.string(), AvatarSkillConfigValueSchema)),
    ),
  }

  return raw
}

const formatRawData = (rawData: ReturnType<typeof parseRawData>) => {
  const { getText } = useText()

  const characterTraces = Object.values(
    rawData.avatarSkillTreeConfig ?? {},
  ).map((skillTree) => {
    const skillTreeLevels = Object.values(skillTree)
    const firstLevel = skillTreeLevels.at(-1)

    if (!firstLevel) return

    return {
      id: `${firstLevel.PointID}`,
      characterId: `${firstLevel.AvatarID}`,
      name: firstLevel.PointName
        ? getText({ Hash: getStableHash(firstLevel.PointName) })
        : null,
      type: firstLevel.PointType,
      linkedAbilityId:
        firstLevel.LevelUpSkillID.length > 0
          ? firstLevel.LevelUpSkillID[0].toString()
          : null,
    } satisfies CharacterTrace
  })

  return characterTraces
}

const generateTemplate = (data: ReturnType<typeof formatRawData>) => {
  const compiled = template({
    characterTraces: data,
  })

  return compiled
}

export const generateCharacterTraces = () => {
  const rawData = parseRawData()
  const formattedData = formatRawData(rawData)
  const compiled = generateTemplate(formattedData)

  console.log(green(`${formattedData.length} character-traces`))
  writeToOutput('character-traces.sql', compiled)
}
