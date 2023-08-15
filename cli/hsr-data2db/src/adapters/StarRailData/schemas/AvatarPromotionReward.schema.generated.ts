import * as z from "zod";

export const AvatarPromotionRewardValueSchema = z.object({
  Promotion: z.number(),
  PromotionRewardId: z.number(),
});
export type AvatarPromotionRewardValue = z.infer<
  typeof AvatarPromotionRewardValueSchema
>;
