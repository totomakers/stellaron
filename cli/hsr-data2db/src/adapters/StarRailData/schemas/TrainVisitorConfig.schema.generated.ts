import * as z from "zod";

export const TrainVisitorConfigValueSchema = z.object({
  VisitorID: z.number(),
  MissionID: z.number(),
  AvatarID: z.number(),
});
export type TrainVisitorConfigValue = z.infer<
  typeof TrainVisitorConfigValueSchema
>;
