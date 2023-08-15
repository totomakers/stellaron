import * as z from "zod";

export const BoxingClubActivityQuestValueSchema = z.object({
  ID: z.number(),
  Name: z.string(),
  ChallengeID: z.number(),
  QuestList: z.array(z.number()),
});
export type BoxingClubActivityQuestValue = z.infer<
  typeof BoxingClubActivityQuestValueSchema
>;
