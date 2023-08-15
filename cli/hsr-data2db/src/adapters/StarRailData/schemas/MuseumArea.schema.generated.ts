import * as z from 'zod'

export const MuseumAreaValueSchema = z.object({
  AreaID: z.number(),
  Level: z.number(),
  PhaseLimit: z.number(),
  FundCost: z.union([z.number(), z.null()]).optional(),
  RenewPoint: z.number(),
  RequireStatsA: z.number(),
  RequireStatsB: z.number(),
  RequireStatsC: z.number(),
})
export type MuseumAreaValue = z.infer<typeof MuseumAreaValueSchema>
