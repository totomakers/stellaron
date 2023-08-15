import * as z from "zod";

export const AvatarDemoSchema = z.object({
  Hash: z.number(),
});
export type AvatarDemo = z.infer<typeof AvatarDemoSchema>;

export const AvatarDemoConfigValueSchema = z.object({
  StageID: z.number(),
  AvatarID: z.number(),
  TrialAvatarList: z.array(z.number()),
  AvatarBackgroundPath: z.string(),
  AvatarCutinPath: z.string(),
  AvatarIntroCutinPath: z.string(),
  AvatarIntroPrefab: z.string(),
  AvatarTabPath: z.string(),
  RewardID: z.number(),
  RaidID: z.union([z.number(), z.null()]).optional(),
  OperationRecordPath: z.string(),
  ScoringGroupID: z.union([z.number(), z.null()]).optional(),
  GuideGroupID: z.union([z.number(), z.null()]).optional(),
  PlaneID: z.number(),
  FloorID: z.number(),
  BattleAreaGroupID: z.number(),
  BattleAreaID: z.number(),
  AvatarDemoGuide: AvatarDemoSchema,
  AvatarDemoTitle: AvatarDemoSchema,
  MapEntranceID: z.number(),
  MazeGroupID1: z.number(),
  ConfigList1: z.array(z.number()),
  NpcMonsterIDList1: z.array(z.number()),
  EventIDList1: z.array(z.number()),
  RandomSeed: z.union([z.number(), z.null()]).optional(),
});
export type AvatarDemoConfigValue = z.infer<typeof AvatarDemoConfigValueSchema>;
