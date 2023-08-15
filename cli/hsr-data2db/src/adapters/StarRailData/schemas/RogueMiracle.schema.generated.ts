import * as z from 'zod'

export const MiracleSchema = z.object({
  Hash: z.number(),
})
export type Miracle = z.infer<typeof MiracleSchema>

export const DescParamListSchema = z.object({
  Value: z.number(),
})
export type DescParamList = z.infer<typeof DescParamListSchema>

export const RogueMiracleValueSchema = z.object({
  MiracleID: z.number(),
  RogueVersion: z.number(),
  UnlockIDList: z.array(z.number()),
  MiracleName: MiracleSchema,
  MiracleDesc: MiracleSchema,
  DescParamList: z.array(DescParamListSchema),
  MiracleBGDesc: MiracleSchema,
  MiracleTag: MiracleSchema,
  MiracleIconPath: z.string(),
  MiracleFigureIconPath: z.string(),
  IsShow: z.union([z.boolean(), z.null()]).optional(),
  MiracleReward: z.union([z.number(), z.null()]).optional(),
  BrokenChangeMiracleID: z.union([z.number(), z.null()]).optional(),
})
export type RogueMiracleValue = z.infer<typeof RogueMiracleValueSchema>
