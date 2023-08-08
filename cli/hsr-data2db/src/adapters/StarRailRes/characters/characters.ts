import path from 'path'
import { STAR_RAIL_RES_DIR } from '../StarRailRes.config'
import { z } from 'zod'
import {
  characterPromotionSchema,
  characterRankSchema,
  characterSchema,
  characterSkillSchema,
} from './characters.schema'

import { green } from 'kolorist'
import { useAdapter } from '../../adapter'

const basePath = path.join(STAR_RAIL_RES_DIR, 'index_min', 'en')

const filePaths = {
  characters: path.join(basePath, 'characters.json'),
  characterSkills: path.join(basePath, 'character_skills.json'),
  characterRanks: path.join(basePath, 'character_ranks.json'),
  characterPromotions: path.join(basePath, 'character_promotions.json'),
}

const adapter = useAdapter({
  characters: {
    path: filePaths.characters,
    schema: z.record(z.string(), characterSchema),
  },
  characterPromotions: {
    path: filePaths.characterPromotions,
    schema: z.record(z.string(), characterPromotionSchema),
  },
  characterRanks: {
    path: filePaths.characterRanks,
    schema: z.record(z.string(), characterRankSchema),
  },
  characterSkills: {
    path: filePaths.characterSkills,
    schema: z.record(z.string(), characterSkillSchema),
  },
} satisfies Record<keyof typeof filePaths, unknown>)

export const parseCharacters = () => {
  console.log(green(`JSON.parse following file in //:`))
  Object.entries(filePaths).map(([key, path]) => {
    console.log(green(`${key}: ${path}`))
  })

  const data = adapter.load()

  console.log(
    green(`🔥 ${Object.entries(data.characters ?? []).length} characters`)
  )

  return data
}
