import * as z from 'zod'

export const CureInfoSchema = z.object({
  Hash: z.number(),
})
export type CureInfo = z.infer<typeof CureInfoSchema>

export const ItemCureInfoDataValueSchema = z.object({
  ID: z.number(),
  CureInfoTitle: CureInfoSchema,
  CureInfoDesc: CureInfoSchema,
  ImgPath: z.string(),
})
export type ItemCureInfoDataValue = z.infer<typeof ItemCureInfoDataValueSchema>
