import * as z from 'zod'

export const ValueSchema = z.object({
  Type: z.string(),
  IntValue: z.number(),
})
export type Value = z.infer<typeof ValueSchema>

export const ActivityStageClearScoreSchema = z.object({
  ConstValueName: z.string(),
  Value: ValueSchema,
})
export type ActivityStageClearScore = z.infer<
  typeof ActivityStageClearScoreSchema
>

export const ConstValueFantasticCommonSchema = z.object({
  Activity_StageClear_Score: ActivityStageClearScoreSchema,
})
export type ConstValueFantasticCommon = z.infer<
  typeof ConstValueFantasticCommonSchema
>
