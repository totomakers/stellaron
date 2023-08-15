import * as z from "zod";

export const AchievementSchema = z.object({
  Hash: z.number(),
});
export type Achievement = z.infer<typeof AchievementSchema>;

export const The1Schema = z.object({
  AchievementID: z.number(),
  AchievementTitle: AchievementSchema,
  AchievementDesc: AchievementSchema,
});
export type The1 = z.infer<typeof The1Schema>;

export const PsTrophySchema = z.object({
  "1": The1Schema,
});
export type PsTrophy = z.infer<typeof PsTrophySchema>;
