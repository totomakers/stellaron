import * as z from 'zod'

export const The4000211Schema = z.object({
  RaidID: z.number(),
  HardLevel: z.number(),
  ActivityModuleID: z.number(),
})
export type The4000211 = z.infer<typeof The4000211Schema>

export const ActivityRaidConfigSchema = z.object({
  '4000211': z.record(z.string(), The4000211Schema),
})
export type ActivityRaidConfig = z.infer<typeof ActivityRaidConfigSchema>
