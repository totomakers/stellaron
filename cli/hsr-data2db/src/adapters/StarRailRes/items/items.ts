import path from 'path'
import { STAR_RAIL_RES_DIR } from '../StarRailRes.config'

import { green } from 'kolorist'
import { useAdapter } from '../../adapter'
import { itemSchema } from './items.schema'
import { z } from 'zod'

const basePath = path.join(STAR_RAIL_RES_DIR, 'index_min', 'en')

const filePaths = {
  items: path.join(basePath, 'items.json'),
}

const itemsAdapter = useAdapter({
  items: {
    path: filePaths.items,
    schema: z.record(z.string(), itemSchema),
  },
} satisfies Record<keyof typeof filePaths, unknown>)

export const parseItems = () => {
  console.log(green(`JSON.parse following file in //:`))
  Object.entries(filePaths).map(([key, path]) => {
    console.log(green(`${key}: ${path}`))
  })

  const data = itemsAdapter.load()
  console.log(green(`🔥 ${Object.entries(data.items ?? []).length} items`))

  return data
}
