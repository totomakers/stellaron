import * as z from "zod";

export const AudioEmotionStateSchema = z.enum(["", "State_Tense"]);
export type AudioEmotionState = z.infer<typeof AudioEmotionStateSchema>;

export const OperationSchema = z.enum(["And", "Or"]);
export type Operation = z.infer<typeof OperationSchema>;

export const BeginParamTypeSchema = z.enum([
  "Auto",
  "Manual",
  "MultiSequence",
  "MuseumPhaseRenewPointReach",
  "PlayerLevel",
  "SequenceNextDay",
]);
export type BeginParamType = z.infer<typeof BeginParamTypeSchema>;

export const MainMissionTypeSchema = z.enum([
  "Branch",
  "Companion",
  "Daily",
  "Main",
]);
export type MainMissionType = z.infer<typeof MainMissionTypeSchema>;

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const ParamSchema = z.object({
  Type: BeginParamTypeSchema,
  Value: z.union([z.number(), z.null()]).optional(),
});
export type Param = z.infer<typeof ParamSchema>;

export const MainMissionValueSchema = z.object({
  MainMissionID: z.number(),
  Type: MainMissionTypeSchema,
  DisplayPriority: z.number(),
  NextMainMissionList: z.array(z.any()),
  Name: NameSchema,
  TakeOperation: OperationSchema,
  BeginOperation: OperationSchema,
  TakeParam: z.array(ParamSchema),
  BeginParam: z.array(ParamSchema),
  NextTrackMainMission: z.union([z.number(), z.null()]).optional(),
  TrackWeight: z.union([z.number(), z.null()]).optional(),
  RewardID: z.union([z.number(), z.null()]).optional(),
  DisplayRewardID: z.union([z.number(), z.null()]).optional(),
  AudioEmotionState: AudioEmotionStateSchema,
  ChapterID: z.union([z.number(), z.null()]).optional(),
  SubRewardList: z.array(z.number()),
  MissionAdvance: z.union([z.number(), z.null()]).optional(),
  IsInRaid: z.union([z.boolean(), z.null()]).optional(),
  MissionSuspend: z.union([z.number(), z.null()]).optional(),
  IsShowRedDot: z.union([z.boolean(), z.null()]).optional(),
});
export type MainMissionValue = z.infer<typeof MainMissionValueSchema>;
