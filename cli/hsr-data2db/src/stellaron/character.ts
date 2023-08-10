import { DEST_DIR } from '../adapters/StarRailData/config'
import { AvatarConfigValueSchema } from '../adapters/StarRailData/schemas/AvatarConfig.schema.generated'
import { readAndParse } from './loadData'
import { join } from 'node:path'
import z from 'zod'

const basePath = join(DEST_DIR, '/ExcelOutput')

export const useCharacter = () => {
  const loadData = () => {
    return {
      avatar: {
        config: readAndParse(
          join(basePath, 'AvatarConfig.json'),
          z.record(z.string(), AvatarConfigValueSchema),
        ),
      },
    }
  }

  const data = loadData()

  return { data } as const
}
