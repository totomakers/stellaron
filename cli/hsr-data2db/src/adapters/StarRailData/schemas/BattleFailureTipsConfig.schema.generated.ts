import * as z from 'zod'

export const GameModeListSchema = z.enum([
  'ActivityPunkLord',
  'Challenge',
  'ChallengeActivity',
  'Client',
  'FarmRelic',
  'Maze',
  'Raid',
  'RogueChallenge',
  'RogueExplore',
  'Town',
])
export type GameModeList = z.infer<typeof GameModeListSchema>

export const TipContentSchema = z.object({
  Hash: z.number(),
})
export type TipContent = z.infer<typeof TipContentSchema>

export const BattleFailureTipsConfigValueSchema = z.object({
  BattleFailureTipID: z.number(),
  TipContent: TipContentSchema,
  GameModeList: z.array(GameModeListSchema),
  PlayerLevel: z.array(z.number()),
  WorldList: z.array(z.any()),
  StageIDForce: z.array(z.number()),
  MainMissionTakenForce: z.array(z.any()),
  MainMissionFinishForce: z.array(z.any()),
  MainMissionUnfinishForce: z.array(z.any()),
  Priority: z.number(),
  Type: z.string(),
})
export type BattleFailureTipsConfigValue = z.infer<
  typeof BattleFailureTipsConfigValueSchema
>
