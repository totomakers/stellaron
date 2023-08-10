import * as z from "zod";

export const ChallengeActMarkValueSchema = z.object({
  MarkType: z.number(),
  MarkIconPath: z.string(),
});
export type ChallengeActMarkValue = z.infer<typeof ChallengeActMarkValueSchema>;
