import * as z from "zod";

export const RelicExpItemValueSchema = z.object({
  ItemID: z.number(),
  ExpProvide: z.number(),
  CoinCost: z.number(),
});
export type RelicExpItemValue = z.infer<typeof RelicExpItemValueSchema>;
