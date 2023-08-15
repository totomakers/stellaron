import * as z from "zod";

export const TimedQuestSchema = z.object({});
export type TimedQuest = z.infer<typeof TimedQuestSchema>;
