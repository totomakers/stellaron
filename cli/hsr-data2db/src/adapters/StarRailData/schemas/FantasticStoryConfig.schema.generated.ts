import * as z from 'zod'

export const The1Schema = z.object({
  FantasticStoryID: z.number(),
  ChapterIDList: z.array(z.number()),
  BattleIDList: z.array(z.number()),
  BuffIDList: z.array(z.number()),
  BuffSlotIDList: z.array(z.number()),
  ActivityModuleID: z.number(),
})
export type The1 = z.infer<typeof The1Schema>

export const FantasticStoryConfigSchema = z.object({
  '1': The1Schema,
})
export type FantasticStoryConfig = z.infer<typeof FantasticStoryConfigSchema>
