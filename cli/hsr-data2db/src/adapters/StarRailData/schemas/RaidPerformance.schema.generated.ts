import * as z from 'zod'

export const The0Schema = z.object({
  RaidID: z.number(),
  HardLevel: z.number(),
  PerformanceID: z.number(),
  PerformanceType: z.string(),
})
export type The0 = z.infer<typeof The0Schema>

export const The40233001Schema = z.object({
  '0': The0Schema,
})
export type The40233001 = z.infer<typeof The40233001Schema>

export const RaidPerformanceSchema = z.object({
  '40233001': The40233001Schema,
})
export type RaidPerformance = z.infer<typeof RaidPerformanceSchema>
