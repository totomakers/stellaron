import * as z from "zod";

export const ConditionDesSchema = z.object({
  Hash: z.number(),
});
export type ConditionDes = z.infer<typeof ConditionDesSchema>;

export const BattleConditionConfigValueSchema = z.object({
  ID: z.number(),
  WinOrLose: z.union([z.boolean(), z.null()]).optional(),
  TargetParam: z.union([z.number(), z.null()]).optional(),
  IsShowProgress: z.union([z.number(), z.null()]).optional(),
  AbilityName: z.string(),
  ConditionDes: ConditionDesSchema,
});
export type BattleConditionConfigValue = z.infer<
  typeof BattleConditionConfigValueSchema
>;
