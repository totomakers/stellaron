import * as z from "zod";

export const OptionSchema = z.object({
  Hash: z.number(),
});
export type Option = z.infer<typeof OptionSchema>;

export const RandomEventChoiceValueSchema = z.object({
  ChoiceID: z.number(),
  EventCostOption: z.union([z.number(), z.null()]).optional(),
  EventRewardBuff: z.union([z.number(), z.null()]).optional(),
  EventBuffDay: z.union([z.number(), z.null()]).optional(),
  Option: OptionSchema,
  IsCancel: z.union([z.boolean(), z.null()]).optional(),
});
export type RandomEventChoiceValue = z.infer<
  typeof RandomEventChoiceValueSchema
>;
