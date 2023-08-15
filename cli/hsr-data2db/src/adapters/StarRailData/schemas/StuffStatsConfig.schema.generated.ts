import * as z from 'zod'

export const MuseumStatsNameSchema = z.object({
  Hash: z.number(),
})
export type MuseumStatsName = z.infer<typeof MuseumStatsNameSchema>

export const StatsSchema = z.object({
  StatsID: z.string(),
  MuseumStatsName: MuseumStatsNameSchema,
  StatsIconPath: z.string(),
})
export type Stats = z.infer<typeof StatsSchema>

export const StuffStatsConfigSchema = z.object({
  StatsA: StatsSchema,
  StatsB: StatsSchema,
  StatsC: StatsSchema,
})
export type StuffStatsConfig = z.infer<typeof StuffStatsConfigSchema>
