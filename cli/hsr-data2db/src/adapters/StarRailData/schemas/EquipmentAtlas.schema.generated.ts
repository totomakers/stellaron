import * as z from 'zod'

export const EquipmentAtlasValueSchema = z.object({
  EquipmentID: z.number(),
  DefaultUnlock: z.union([z.boolean(), z.null()]).optional(),
})
export type EquipmentAtlasValue = z.infer<typeof EquipmentAtlasValueSchema>
