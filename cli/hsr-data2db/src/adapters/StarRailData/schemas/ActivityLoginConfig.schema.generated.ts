import * as z from "zod";

export const ActivityLoginConfigValueSchema = z.object({
  ID: z.number(),
  RewardList: z.array(z.number()),
  ActivityModuleID: z.number(),
});
export type ActivityLoginConfigValue = z.infer<
  typeof ActivityLoginConfigValueSchema
>;
