import { z } from 'zod'

const characterSchema = z.object({
  id: z.string(),
  rarity: z.string(),
  name: z.string().nullable(),
  damageType: z.string(),
  path: z.string(),
})

export type CharacterSchema = z.infer<typeof characterSchema>
