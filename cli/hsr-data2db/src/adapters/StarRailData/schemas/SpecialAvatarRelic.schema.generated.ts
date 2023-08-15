import * as z from 'zod'

export const RelicIdListSchema = z.object({
  ICIGIAEEPCD: z.number(),
  BJGOEPEFGMM: z.union([z.number(), z.null()]).optional(),
})
export type RelicIdList = z.infer<typeof RelicIdListSchema>

export const SpecialAvatarRelicValueSchema = z.object({
  RelicPropertyType: z.number(),
  RelicIDList: z.array(RelicIdListSchema),
})
export type SpecialAvatarRelicValue = z.infer<
  typeof SpecialAvatarRelicValueSchema
>
