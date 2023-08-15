import * as z from "zod";

export const AvatarAbilityStatisticsValueSchema = z.object({
  AvatarID: z.number(),
  ExtractionAbilityList: z.array(z.string()),
});
export type AvatarAbilityStatisticsValue = z.infer<
  typeof AvatarAbilityStatisticsValueSchema
>;
