import { z } from 'zod'

const relicSchema = z.object({
  id: z.string(),
  relicSetId: z.string(),
  type: z.string(),
  name: z.string(),
})

export type Relic = z.infer<typeof relicSchema>
