import path from 'path'
import { STAR_RAIL_RES_DIR } from '../StarRailRes'
import z from 'zod'
import { green } from 'kolorist'

import { readAndParse } from '../utils'
import {
  lightConePromotionsSchema,
  lightConeRankSchema,
  lightConeSchema,
} from './light-cones.schema'

const filePaths = {
  lightCones: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'light_cones.json'
  ),
  lightConePromotions: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'light_cone_promotions.json'
  ),
  lightConeRanks: path.join(
    STAR_RAIL_RES_DIR,
    'index_min',
    'en',
    'light_cone_ranks.json'
  ),
}

export const parseAndTransformLightCones = () => {
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
    lightCones: readAndParse(
      filePaths.lightCones,
      z.record(z.string(), lightConeSchema)
    ),
    lightConePromotions: readAndParse(
      filePaths.lightConePromotions,
      z.record(z.string(), lightConePromotionsSchema)
    ),
    lightConeRanks: readAndParse(
      filePaths.lightConeRanks,
      z.record(z.string(), lightConeRankSchema)
    ),
  } satisfies Record<keyof typeof filePaths, unknown>

  return data
}

type LightConeData = Awaited<ReturnType<typeof getData>>

const dataToSql = (data: LightConeData) => {
  if (!data.lightConePromotions || !data.lightConeRanks || !data.lightCones)
    return

  console.log(green(`🔥 ${Object.entries(data.lightCones).length} lightCones`))
}
