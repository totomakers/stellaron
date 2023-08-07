import path from 'path'
import { STAR_RAIL_RES_DIR } from '../StarRailRes'
import z from 'zod'
import { green } from 'kolorist'

import { readAndParse } from '../utils'
import { itemSchema } from './items.schema'

const filePaths = {
  items: path.join(STAR_RAIL_RES_DIR, 'index_min', 'en', 'items.json'),
}

export const parseAndTransformItems = () => {
  const data = getData()
  dataToSql(data)
}

const getData = () => {
  console.log(green(`JSON.parse following file in //:`))

  Object.entries(filePaths).map(([key, path]) => {
    console.log(green(`${key}: ${path}`))
  })

  const data = {
    items: readAndParse(filePaths.items, z.record(z.string(), itemSchema)),
  } satisfies Record<keyof typeof filePaths, unknown>

  return data
}

type LightConeData = Awaited<ReturnType<typeof getData>>

const dataToSql = (data: LightConeData) => {
  if (!data.items) return

  console.log(green(`🔥 ${Object.entries(data.items).length} items`))
}
