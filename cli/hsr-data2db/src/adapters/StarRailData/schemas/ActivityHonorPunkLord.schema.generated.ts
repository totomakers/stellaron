import * as z from 'zod'

export const HonorNameSchema = z.object({
  Hash: z.number(),
})
export type HonorName = z.infer<typeof HonorNameSchema>

export const ActivityHonorPunkLordValueSchema = z.object({
  HonorID: z.number(),
  HonorName: HonorNameSchema,
  DisplayPriority: z.number(),
})
export type ActivityHonorPunkLordValue = z.infer<
  typeof ActivityHonorPunkLordValueSchema
>
