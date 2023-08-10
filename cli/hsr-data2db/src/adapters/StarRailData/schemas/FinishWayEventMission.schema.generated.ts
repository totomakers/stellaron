import * as z from "zod";

export const FinishTypeSchema = z.enum([
  "ClientProgress",
  "EnterFloor",
  "MessagePerformSectionFinish",
  "PropState",
  "Talk",
]);
export type FinishType = z.infer<typeof FinishTypeSchema>;

export const ParamStr1Schema = z.enum([
  "",
  "EventMission_100086",
  "EventMission_100087",
  "EventMission_100088",
  "EventMission_100099",
  "EventMission_900201",
]);
export type ParamStr1 = z.infer<typeof ParamStr1Schema>;

export const ParamTypeSchema = z.enum(["Equal", "NoPara"]);
export type ParamType = z.infer<typeof ParamTypeSchema>;

export const FinishWayEventMissionValueSchema = z.object({
  ID: z.number(),
  FinishType: FinishTypeSchema,
  ParamType: ParamTypeSchema,
  ParamStr1: ParamStr1Schema,
  ParamIntList: z.array(z.any()),
  ParamItemList: z.array(z.any()),
  Progress: z.number(),
  ParamInt1: z.union([z.number(), z.null()]).optional(),
  ParamInt2: z.union([z.number(), z.null()]).optional(),
  ParamInt3: z.union([z.number(), z.null()]).optional(),
});
export type FinishWayEventMissionValue = z.infer<
  typeof FinishWayEventMissionValueSchema
>;
