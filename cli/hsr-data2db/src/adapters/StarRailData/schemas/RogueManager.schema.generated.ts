import * as z from "zod";

export const RogueManagerValueSchema = z.object({
  RogueSeason: z.number(),
  RogueVersion: z.number(),
  RogueAreaIDList: z.array(z.number()),
  BeginTime: z.string(),
  EndTime: z.string(),
  ScheduleDataID: z.number(),
});
export type RogueManagerValue = z.infer<typeof RogueManagerValueSchema>;
