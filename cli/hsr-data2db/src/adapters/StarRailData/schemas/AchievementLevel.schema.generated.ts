import * as z from "zod";

export const AchievementLevelValueSchema = z.object({
  Level: z.number(),
  Count: z.number(),
  LevelIconPath: z.string(),
});
export type AchievementLevelValue = z.infer<typeof AchievementLevelValueSchema>;
