import * as z from "zod";

export const EventTypeSchema = z.enum(["Buff", "Debuff"]);
export type EventType = z.infer<typeof EventTypeSchema>;

export const ParamListSchema = z.object({
  Value: z.number(),
});
export type ParamList = z.infer<typeof ParamListSchema>;

export const StageBattleEventConfigValueSchema = z.object({
  EventID: z.number(),
  EventType: EventTypeSchema,
  IconPath: z.string(),
  IncludeAvatar: z.boolean(),
  ModifierNameList: z.array(z.string()),
  AbilityNameList: z.array(z.any()),
  SelfModifierNameList: z.array(z.any()),
  ParamList: z.array(ParamListSchema),
  IncludeMonster: z.union([z.boolean(), z.null()]).optional(),
});
export type StageBattleEventConfigValue = z.infer<
  typeof StageBattleEventConfigValueSchema
>;
