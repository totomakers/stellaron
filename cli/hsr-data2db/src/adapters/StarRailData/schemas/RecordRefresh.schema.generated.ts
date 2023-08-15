import * as z from 'zod'

export const RefreshTypeSchema = z.enum(['Countdown', 'Immediately', 'Weekly'])
export type RefreshType = z.infer<typeof RefreshTypeSchema>

export const RecordRefreshValueSchema = z.object({
  RefreshID: z.number(),
  RefreshTime: z.array(z.number()),
  RefreshType: z.union([RefreshTypeSchema, z.null()]).optional(),
})
export type RecordRefreshValue = z.infer<typeof RecordRefreshValueSchema>
