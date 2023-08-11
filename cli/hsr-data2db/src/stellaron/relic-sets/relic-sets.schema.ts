import { z } from 'zod'

export const relicSetSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type RelicSet = z.infer<typeof relicSetSchema>

export const relicSetEffectSchema = z.object({
  id: z.string(),
  desc: z.string(),
  requiredNum: z.number().nullable(),
  relicSetId: z.string(),
})

export type RelicSetEffect = z.infer<typeof relicSetEffectSchema>
