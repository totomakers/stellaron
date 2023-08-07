import path from 'path'
import { STAR_RAIL_RES_DIR } from '../StarRailRes'
import { green } from 'kolorist'
import { readAndParse } from '../utils'
import { z } from 'zod'
import {
  characterPromotionSchema,
  characterRankSchema,
  characterSchema,
  characterSkillSchema,
} from './characters.schema'

const filePaths = {
  characters: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'characters.json'
  ),
  characterSkills: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'character_skills.json'
  ),
  characterRanks: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'character_ranks.json'
  ),
  characterPromotions: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'fr',
    'character_promotions.json'
  ),
}

export const parseAndTransformCharacters = () => {
  const data = getData()

  // Transform to SQL for Stellaron
  dataToSql(data)
}

export const getData = () => {
  console.log(green(`JSON.parse following file in //:`))

  Object.entries(filePaths).map(([key, path]) => {
    console.log(green(`${key}: ${path}`))
  })

  const data = {
    characters: readAndParse(
      filePaths.characters,
      z.record(z.string(), characterSchema)
    ),
    characterSkills: readAndParse(
      filePaths.characterSkills,
      z.record(z.string(), characterSkillSchema)
    ),
    characterRanks: readAndParse(
      filePaths.characterRanks,
      z.record(z.string(), characterRankSchema)
    ),
    characterPromotions: readAndParse(
      filePaths.characterPromotions,
      z.record(z.string(), characterPromotionSchema)
    ),
  } satisfies Record<keyof typeof filePaths, unknown>

  return data
}

type LightConeData = Awaited<ReturnType<typeof getData>>

export const dataToSql = (data: LightConeData) => {
  if (!data.characters) return

  console.log(green(`🔥 ${Object.entries(data.characters).length} characters`))
}
