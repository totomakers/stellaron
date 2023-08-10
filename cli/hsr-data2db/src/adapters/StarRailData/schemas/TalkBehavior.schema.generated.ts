import * as z from "zod";

export const TalkBehaviorValueSchema = z.object({
  ID: z.number(),
  BehaviorType: z.number(),
  ParaType: z.string(),
  ParaInt: z.union([z.number(), z.null()]).optional(),
  ParaList: z.array(z.number()),
  CurrencyItem: z.number(),
  CustomString: z.string(),
});
export type TalkBehaviorValue = z.infer<typeof TalkBehaviorValueSchema>;
