import * as z from "zod";

export const The2Schema = z.object({
  ExpeditionID: z.number(),
  Duration: z.number(),
  AvatarNum: z.number(),
  RewardID: z.number(),
  ExtraRewardID: z.number(),
});
export type The2 = z.infer<typeof The2Schema>;

export const ExpeditionRewardValueSchema = z.object({
  "2": The2Schema,
});
export type ExpeditionRewardValue = z.infer<typeof ExpeditionRewardValueSchema>;
