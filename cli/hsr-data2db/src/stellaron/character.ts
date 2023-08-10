import { DEST_DIR } from '../adapters/StarRailData/config'
import { AvatarConfigValueSchema } from '../adapters/StarRailData/schemas/AvatarConfig.schema.generated'
import { AvatarPromotionConfigValueSchema } from '../adapters/StarRailData/schemas/AvatarPromotionConfig.schema.generated'
import { AvatarSkillConfigValueSchema } from '../adapters/StarRailData/schemas/AvatarSkillConfig.schema.generated'
import { ItemConfigAvatarValueSchema } from '../adapters/StarRailData/schemas/ItemConfigAvatar.schema.generated'
import { readAndParse } from './loadData'
import { join } from 'node:path'
import z from 'zod'

const basePath = join(DEST_DIR, '/ExcelOutput')

const loadData = () => {
  return {
    itemConfigAvatar: readAndParse(
      join(basePath, 'ItemConfigAvatar.json'),
      z.record(z.string(), ItemConfigAvatarValueSchema),
    ),
    avatarConfig: readAndParse(
      join(basePath, 'AvatarConfig.json'),
      z.record(z.string(), AvatarConfigValueSchema),
    ),
    avatarPromotionConfig: readAndParse(
      join(basePath, 'AvatarPromotionConfig.json'),
      z.record(z.record(z.string(), AvatarPromotionConfigValueSchema)),
    ),
    avatarSkillConfig: readAndParse(
      join(basePath, 'AvatarSkillConfig.json'),
      z.record(z.record(z.string(), AvatarSkillConfigValueSchema)),
    ),
  }
}

export const useCharacter = () => {
  const data = loadData()

  return { data } as const
}
