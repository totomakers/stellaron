import * as z from "zod";

export const GiftNameSchema = z.object({
  Hash: z.number(),
});
export type GiftName = z.infer<typeof GiftNameSchema>;

export const RechargeConfigValueSchema = z.object({
  ProductID: z.string(),
  TierID: z.string(),
  GiftType: z.number(),
  GiftName: GiftNameSchema,
  GiftImage: z.string(),
  ListOrder: z.union([z.number(), z.null()]).optional(),
  FirstCharge: z.union([z.number(), z.null()]).optional(),
  NormalCharge: z.union([z.number(), z.null()]).optional(),
});
export type RechargeConfigValue = z.infer<typeof RechargeConfigValueSchema>;
