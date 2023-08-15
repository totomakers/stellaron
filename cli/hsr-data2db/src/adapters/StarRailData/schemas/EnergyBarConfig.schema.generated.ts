import * as z from 'zod'

export const EnergyBarConfigSchema = z.object({})
export type EnergyBarConfig = z.infer<typeof EnergyBarConfigSchema>
