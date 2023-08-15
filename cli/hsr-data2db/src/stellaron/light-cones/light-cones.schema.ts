import { z } from 'zod'

export const lightConesSchema = z.object({
  id: z.string(),
  name: z.string(),
  rarity: z.string(),
  path: z.string(),
})

export type LightCone = z.infer<typeof lightConesSchema>
