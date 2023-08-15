import * as z from 'zod'

export const The101Schema = z.object({
  ScoringGroupID: z.number(),
  ScoringIDList: z.array(z.number()),
})
export type The101 = z.infer<typeof The101Schema>

export const ScoringGroupSchema = z.object({
  '101': The101Schema,
})
export type ScoringGroup = z.infer<typeof ScoringGroupSchema>
