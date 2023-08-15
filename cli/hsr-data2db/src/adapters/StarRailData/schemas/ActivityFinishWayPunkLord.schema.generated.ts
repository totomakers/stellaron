import * as z from 'zod'

export const FinishRareSchema = z.enum(['A'])
export type FinishRare = z.infer<typeof FinishRareSchema>

export const FinishNameSchema = z.object({
  Hash: z.number(),
})
export type FinishName = z.infer<typeof FinishNameSchema>

export const ActivityFinishWayPunkLordValueSchema = z.object({
  FinishID: z.number(),
  FinishName: FinishNameSchema,
  FinishRare: FinishRareSchema,
  FinishPoint: z.number(),
})
export type ActivityFinishWayPunkLordValue = z.infer<
  typeof ActivityFinishWayPunkLordValueSchema
>
