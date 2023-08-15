import * as z from 'zod'

export const TypeSchema = z.enum([
  'FinishMainMission',
  'PlayerLevel',
  'WorldLevel',
])
export type Type = z.infer<typeof TypeSchema>

export const ConditionSchema = z.object({
  Type: TypeSchema,
  Param: z.string(),
})
export type Condition = z.infer<typeof ConditionSchema>

export const FuncUnlockDataValueSchema = z.object({
  UnlockID: z.number(),
  Conditions: z.array(ConditionSchema),
  ShowCondition: z.array(z.string()),
})
export type FuncUnlockDataValue = z.infer<typeof FuncUnlockDataValueSchema>
