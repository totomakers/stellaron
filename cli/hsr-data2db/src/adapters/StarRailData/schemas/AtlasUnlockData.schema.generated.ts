import * as z from 'zod'

export const TypeSchema = z.enum(['AvatarLevel', 'FinishMainMission'])
export type Type = z.infer<typeof TypeSchema>

export const ConditionSchema = z.object({
  Type: TypeSchema,
  Param: z.string(),
})
export type Condition = z.infer<typeof ConditionSchema>

export const AtlasUnlockDataValueSchema = z.object({
  UnlockID: z.number(),
  Conditions: z.array(ConditionSchema),
  ShowCondition: z.array(z.any()),
})
export type AtlasUnlockDataValue = z.infer<typeof AtlasUnlockDataValueSchema>
