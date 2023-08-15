import * as z from 'zod'

export const BookContextSchema = z.object({
  Hash: z.number(),
})
export type BookContext = z.infer<typeof BookContextSchema>

export const FantasticStoryBattleIdValueSchema = z.object({
  BattleID: z.number(),
  FigurePath: z.string(),
  Name: BookContextSchema,
  QuestList: z.array(z.number()),
  TurnLimit: z.number(),
  TextJoinIDList: z.array(z.number()),
  FinishQuest: z.number(),
  UnlockChapterID: z.number(),
  EnvironmentBuffID: z.number(),
  RecommendNature: z.array(z.any()),
  RecommendAvatar: z.array(z.number()),
  DisplayMonsterList: z.array(z.number()),
  SpecialAvatarIDList: z.array(z.number()),
  ActivityModuleID: z.number(),
  EventID: z.number(),
  AvailableBuffSlotID: z.array(z.number()),
  PlaneID: z.number(),
  FloorID: z.number(),
  BattleAreaGroupID: z.number(),
  BattleAreaID: z.number(),
  BookTitle: BookContextSchema,
  BookContext: BookContextSchema,
  PreBattleID: z.union([z.number(), z.null()]).optional(),
})
export type FantasticStoryBattleIdValue = z.infer<
  typeof FantasticStoryBattleIdValueSchema
>
