import * as z from "zod";

export const RewardTypeSchema = z.enum(["Event", "Staff"]);
export type RewardType = z.infer<typeof RewardTypeSchema>;

export const MuseumTargetValueSchema = z.object({
  TargetID: z.number(),
  MuseumMissionList: z.array(z.number()),
  Order: z.number(),
  TriggerTurns: z.number(),
  TriggerPhase: z.number(),
  RewardType: RewardTypeSchema,
  TypeParameter: z.number(),
});
export type MuseumTargetValue = z.infer<typeof MuseumTargetValueSchema>;
