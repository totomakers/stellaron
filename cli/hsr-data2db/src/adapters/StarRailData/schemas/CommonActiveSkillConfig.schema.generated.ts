import * as z from "zod";

export const CommonActiveSkillConfigValueSchema = z.object({
  CommonActiveSkillID: z.number(),
  AbilityName: z.string(),
});
export type CommonActiveSkillConfigValue = z.infer<
  typeof CommonActiveSkillConfigValueSchema
>;
