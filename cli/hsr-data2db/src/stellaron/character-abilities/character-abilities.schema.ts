import { z } from 'zod'

const characterAbility = z.object({
  id: z.string(),
  name: z.string().nullable(),
  type: z.string().nullable(),
  effectType: z.string(),
  characterId: z.string(),
})

export type CharacterAbility = z.infer<typeof characterAbility>
