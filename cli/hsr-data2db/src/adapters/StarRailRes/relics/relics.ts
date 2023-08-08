import path from 'path'
import { STAR_RAIL_RES_DIR } from '../StarRailRes.config'
import z from 'zod'
import { green } from 'kolorist'

import {
  relicMainAffixesSchema,
  relicSetsSchema,
  relicSubAffixesSchema,
  relicsSchema,
} from './relics.schema'
import { useAdapter } from '../../adapter'

const filePaths = {
  relics: path.join(STAR_RAIL_RES_DIR, 'index_min', 'en', 'relics.json'),
  relicSets: path.join(STAR_RAIL_RES_DIR, 'index_min', 'en', 'relic_sets.json'),
  relicMainAffixes: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'relic_main_affixes.json'
  ),
  relicSubAffixes: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'relic_sub_affixes.json'
  ),
}

const adapter = useAdapter({
  relics: {
    path: filePaths.relics,
    schema: z.record(z.string(), relicsSchema),
  },
  relicSets: {
    path: filePaths.relicSets,
    schema: z.record(z.string(), relicSetsSchema),
  },
  relicMainAffixes: {
    path: filePaths.relicMainAffixes,
    schema: z.record(z.string(), relicMainAffixesSchema),
  },
  relicSubAffixes: {
    path: filePaths.relicSubAffixes,
    schema: z.record(z.string(), relicSubAffixesSchema),
  },
} satisfies Record<keyof typeof filePaths, unknown>)

export const parseRelics = () => {
  console.log(green(`JSON.parse following file in //:`))
  Object.entries(filePaths).map(([key, path]) => {
    console.log(green(`${key}: ${path}`))
  })

  const data = adapter.load()

  console.log(
    green(
      `🔥 ${Object.entries(data.relics ?? []).length} relics & ${
        Object.entries(data.relicSets ?? []).length
      } relics sets`
    )
  )

  return data
}
