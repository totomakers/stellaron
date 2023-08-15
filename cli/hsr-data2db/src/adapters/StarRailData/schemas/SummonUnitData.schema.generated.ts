import * as z from 'zod'

export const SummonUnitDataSchema = z.object({})
export type SummonUnitData = z.infer<typeof SummonUnitDataSchema>
