import * as z from "zod";

export const The1Schema = z.object({
  ID: z.number(),
  RewardID: z.number(),
  RewardNum: z.number(),
});
export type The1 = z.infer<typeof The1Schema>;

export const ShareRewardDataSchema = z.object({
  "1": The1Schema,
});
export type ShareRewardData = z.infer<typeof ShareRewardDataSchema>;
