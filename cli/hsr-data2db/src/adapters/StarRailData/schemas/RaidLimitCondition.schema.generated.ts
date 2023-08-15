import * as z from 'zod'

export const LimitDescSchema = z.object({
  Hash: z.number(),
})
export type LimitDesc = z.infer<typeof LimitDescSchema>

export const RaidLimitConditionValueSchema = z.object({
  ID: z.number(),
  LimitType: z.string(),
  ParamType: z.string(),
  ParamInt1: z.number(),
  LimitDesc: LimitDescSchema,
})
export type RaidLimitConditionValue = z.infer<
  typeof RaidLimitConditionValueSchema
>
