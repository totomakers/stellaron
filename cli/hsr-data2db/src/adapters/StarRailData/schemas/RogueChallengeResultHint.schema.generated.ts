import * as z from "zod";

export const TypeSchema = z.enum([
  "AvatarAvgLvLessThen",
  "BuffNumLessEqual",
  "FinishGoalLessThen",
  "SpecificIDTargetProgressInRange",
]);
export type Type = z.infer<typeof TypeSchema>;

export const HintDescSchema = z.object({
  Hash: z.number(),
});
export type HintDesc = z.infer<typeof HintDescSchema>;

export const RogueChallengeResultHintValueSchema = z.object({
  HintID: z.number(),
  Type: TypeSchema,
  ParamList: z.array(z.number()),
  Order: z.number(),
  HintDesc: HintDescSchema,
});
export type RogueChallengeResultHintValue = z.infer<
  typeof RogueChallengeResultHintValueSchema
>;
