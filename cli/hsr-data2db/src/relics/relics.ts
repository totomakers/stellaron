import path from 'path'
import { STAR_RAIL_RES_DIR } from '../star-rail-res'
import z from 'zod'
import { green } from 'kolorist'

import { readAndParse } from '../utils'
import {
  relicMainAffixesSchema,
  relicSetsSchema,
  relicSubAffixesSchema,
  relicsSchema,
} from './relics.schema'

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

export const parseAndTransformRelics = () => {
  const data = getData()

  // Transform to SQL for Stellaron
  dataToSql(data)
}

const getData = () => {
  console.log(green(`JSON.parse following file in //:`))

  Object.entries(filePaths).map(([key, path]) => {
    console.log(green(`${key}: ${path}`))
  })

  const data = {
    relics: readAndParse(filePaths.relics, z.record(z.string(), relicsSchema)),
    relicSets: readAndParse(
      filePaths.relicSets,
      z.record(z.string(), relicSetsSchema)
    ),
    relicMainAffixes: readAndParse(
      filePaths.relicMainAffixes,
      z.record(z.string(), relicMainAffixesSchema)
    ),
    relicSubAffixes: readAndParse(
      filePaths.relicSubAffixes,
      z.record(z.string(), relicSubAffixesSchema)
    ),
  } satisfies Record<keyof typeof filePaths, unknown>

  return data
}

type LightConeData = Awaited<ReturnType<typeof getData>>

const dataToSql = (data: LightConeData) => {
  if (
    !data.relics ||
    !data.relicSets ||
    !data.relicSubAffixes ||
    !data.relicMainAffixes
  )
    return

  console.log(
    green(
      `🔥 ${Object.entries(data.relics).length} relics & ${
        Object.entries(data.relicSets).length
      } relics sets`
    )
  )
}
