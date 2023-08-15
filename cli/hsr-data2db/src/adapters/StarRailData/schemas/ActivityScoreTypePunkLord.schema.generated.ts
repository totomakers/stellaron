import * as z from 'zod'

export const FinishNameSchema = z.object({
  Hash: z.number(),
})
export type FinishName = z.infer<typeof FinishNameSchema>

export const ASchema = z.object({
  FinishID: z.string(),
  FinishRare: z.string(),
  FinishName: FinishNameSchema,
  FinishPoint: z.number(),
})
export type A = z.infer<typeof ASchema>

export const AssistSchema = z.object({
  S: ASchema,
  A: ASchema,
  B: ASchema,
})
export type Assist = z.infer<typeof AssistSchema>

export const ActivityScoreTypePunkLordSchema = z.object({
  DAMAGE: AssistSchema,
  FINAL_HIT: AssistSchema,
  ASSIST: AssistSchema,
})
export type ActivityScoreTypePunkLord = z.infer<
  typeof ActivityScoreTypePunkLordSchema
>
