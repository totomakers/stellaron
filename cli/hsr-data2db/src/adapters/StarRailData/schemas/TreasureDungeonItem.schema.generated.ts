import * as z from 'zod'

export const DescSchema = z.object({
  Hash: z.number(),
})
export type Desc = z.infer<typeof DescSchema>

export const TreasureDungeonItemValueSchema = z.object({
  ItemID: z.number(),
  Type: z.string(),
  TypeParam: z.array(z.number()),
  ParamInt: z.union([z.number(), z.null()]).optional(),
  Name: DescSchema,
  Desc: DescSchema,
  IconPath: z.string(),
  IconPath2D: z.string(),
  AudioEventName: z.string(),
})
export type TreasureDungeonItemValue = z.infer<
  typeof TreasureDungeonItemValueSchema
>
