import * as z from 'zod'

export const GmAccountEquipmentConfigSchema = z.object({})
export type GmAccountEquipmentConfig = z.infer<
  typeof GmAccountEquipmentConfigSchema
>
