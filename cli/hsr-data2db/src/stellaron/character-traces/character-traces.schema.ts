import { z } from 'zod'

const characterTraceSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  type: z.number(),
  characterId: z.string(),
  linkedAbilityId: z.string().nullable(),
})

export type CharacterTrace = z.infer<typeof characterTraceSchema>
