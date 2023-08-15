import * as z from "zod";

export const MissionJsonPathSchema = z.enum([
  "Config/Level/Mission/Common/Mission_Null.json",
]);
export type MissionJsonPath = z.infer<typeof MissionJsonPathSchema>;

export const TakeTypeSchema = z.enum([
  "Auto",
  "Client",
  "Manual",
  "SequenceNextDay",
]);
export type TakeType = z.infer<typeof TakeTypeSchema>;

export const TypeSchema = z.enum(["Challenge", "Normal"]);
export type Type = z.infer<typeof TypeSchema>;

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const EventMissionValueSchema = z.object({
  ID: z.number(),
  Type: TypeSchema,
  Title: DescSchema,
  Desc: DescSchema,
  NextEventMissionList: z.array(z.number()),
  TakeType: TakeTypeSchema,
  TakeParamIntList: z.array(z.number()),
  FinishWayID: z.number(),
  MazePlaneID: z.number(),
  MazeFloorID: z.number(),
  LoadGroupList: z.array(z.any()),
  UnLoadGroupList: z.array(z.any()),
  ClearGroupList: z.array(z.any()),
  MissionJsonPath: MissionJsonPathSchema,
  RewardID: z.union([z.number(), z.null()]).optional(),
});
export type EventMissionValue = z.infer<typeof EventMissionValueSchema>;
