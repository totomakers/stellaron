import * as z from 'zod'

export const FirstPerformanceValueSchema = z.object({
  PerformanceID: z.number(),
})
export type FirstPerformanceValue = z.infer<typeof FirstPerformanceValueSchema>
