import * as z from "zod";

export const CityShopRewardListValueSchema = z.object({
  GroupID: z.number(),
  Level: z.number(),
  ItemNeed: z.number(),
  TotalItem: z.number(),
  RewardID: z.union([z.number(), z.null()]).optional(),
});
export type CityShopRewardListValue = z.infer<
  typeof CityShopRewardListValueSchema
>;
