import path from 'path'
import { STAR_RAIL_RES_DIR } from '../StarRailRes.config'
import z from 'zod'
import { green } from 'kolorist'

import {
  lightConePromotionsSchema,
  lightConeRankSchema,
  lightConeSchema,
} from './light-cones.schema'

import { useAdapter } from '../../adapter'

const basePath = path.join(STAR_RAIL_RES_DIR, 'index_min', 'en')

const filePaths = {
  lightCones: path.join(basePath, 'light_cones.json'),
  lightConePromotions: path.join(basePath, 'light_cone_promotions.json'),
  lightConeRanks: path.join(basePath, 'light_cone_ranks.json'),
}

const adapter = useAdapter({
  lightCones: {
    path: filePaths.lightCones,
    schema: z.record(z.string(), lightConeSchema),
  },
  lightConePromotions: {
    path: filePaths.lightConePromotions,
    schema: z.record(z.string(), lightConePromotionsSchema),
  },
  lightConeRanks: {
    path: filePaths.lightConeRanks,
    schema: z.record(z.string(), lightConeRankSchema),
  },
} satisfies Record<keyof typeof filePaths, unknown>)

export const parseLightCones = () => {
  console.log(green(`JSON.parse following file in //:`))
  Object.entries(filePaths).map(([key, path]) => {
    console.log(green(`${key}: ${path}`))
  })

  const data = adapter.load()

  console.log(
    green(`🔥 ${Object.entries(data.lightCones ?? []).length} lightCones`)
  )

  return data
}
