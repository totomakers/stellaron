import * as z from "zod";

export const ParamTypeSchema = z.enum([
  "Equal",
  "GreaterEqual",
  "IntContainListContain",
  "LessEqual",
  "ListContain",
  "NoPara",
]);
export type ParamType = z.infer<typeof ParamTypeSchema>;

export const FinishWayValueSchema = z.object({
  ID: z.number(),
  FinishType: z.string(),
  ParamType: ParamTypeSchema,
  ParamInt1: z.union([z.number(), z.null()]).optional(),
  ParamStr1: z.string(),
  ParamIntList: z.array(z.number()),
  ParamItemList: z.array(z.any()),
  Progress: z.number(),
  ParamInt2: z.union([z.number(), z.null()]).optional(),
  IsBackTrack: z.union([z.boolean(), z.null()]).optional(),
  ParamInt3: z.union([z.number(), z.null()]).optional(),
  MazePlaneID: z.union([z.number(), z.null()]).optional(),
  MazeFloorID: z.union([z.number(), z.null()]).optional(),
});
export type FinishWayValue = z.infer<typeof FinishWayValueSchema>;
