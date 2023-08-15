import * as z from "zod";

export const InclinationTextValueSchema = z.object({
  TalkSentenceID: z.number(),
  InclinationTypeList: z.array(z.number()),
});
export type InclinationTextValue = z.infer<typeof InclinationTextValueSchema>;
