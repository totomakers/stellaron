import * as z from 'zod'

export const MonsterResearchSchema = z.object({
  ConstValueName: z.string(),
  Value: z.number(),
})
export type MonsterResearch = z.infer<typeof MonsterResearchSchema>

export const MonsterResearchConstSchema = z.object({
  MonsterResearch_UnlockLevel: MonsterResearchSchema,
  MonsterResearch_UnlockMission: MonsterResearchSchema,
  MonsterResearch_ResearchBook_UnlockMission: MonsterResearchSchema,
  MonsterResearch_ActivityPanel_Goto_MappingInfo: MonsterResearchSchema,
})
export type MonsterResearchConst = z.infer<typeof MonsterResearchConstSchema>
