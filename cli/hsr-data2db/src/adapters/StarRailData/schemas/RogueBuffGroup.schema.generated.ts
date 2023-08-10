import * as z from "zod";

export const RogueBuffGroupValueSchema = z.object({
  ADLLKMALJCK: z.number(),
  FEGKLOOAFHA: z.array(z.number()),
});
export type RogueBuffGroupValue = z.infer<typeof RogueBuffGroupValueSchema>;
