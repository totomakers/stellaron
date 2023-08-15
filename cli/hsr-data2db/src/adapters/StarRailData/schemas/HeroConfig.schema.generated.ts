import * as z from "zod";

export const HeroConfigValueSchema = z.object({
  HeroAvatarID: z.number(),
  Gender: z.string(),
  UnlockMissionID: z.union([z.number(), z.null()]).optional(),
});
export type HeroConfigValue = z.infer<typeof HeroConfigValueSchema>;
