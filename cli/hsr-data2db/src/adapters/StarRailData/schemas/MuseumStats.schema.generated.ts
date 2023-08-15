import * as z from 'zod'

export const MuseumStatSchema = z.object({
  Level: z.number(),
  AreaID: z.number(),
  StatsType: z.number(),
  PhaseLimit: z.number(),
  FundCost: z.union([z.number(), z.null()]).optional(),
  StatsValue: z.number(),
})
export type MuseumStat = z.infer<typeof MuseumStatSchema>
