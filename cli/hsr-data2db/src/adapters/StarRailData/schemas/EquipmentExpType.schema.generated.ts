import * as z from 'zod'

export const EquipmentExpTypeValueSchema = z.object({
  ExpType: z.number(),
  Level: z.number(),
  Exp: z.union([z.number(), z.null()]).optional(),
})
export type EquipmentExpTypeValue = z.infer<typeof EquipmentExpTypeValueSchema>
