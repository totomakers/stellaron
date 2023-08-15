import * as z from 'zod'

export const MaterialListSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
})
export type MaterialList = z.infer<typeof MaterialListSchema>

export const ActivityMonsterResearchValueSchema = z.object({
  ActivityMonsterResearchID: z.number(),
  ActivityModuleID: z.number(),
  QuestionID: z.array(z.number()),
  MaterialList: z.array(MaterialListSchema),
  MissionID: z.number(),
  RewardID: z.number(),
})
export type ActivityMonsterResearchValue = z.infer<
  typeof ActivityMonsterResearchValueSchema
>
