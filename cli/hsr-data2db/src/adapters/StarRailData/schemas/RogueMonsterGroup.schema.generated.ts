import * as z from "zod";

export const RogueMonsterGroupValueSchema = z.object({
  RogueMonsterGroupID: z.number(),
  RogueMonsterListAndWeight: z.record(z.string(), z.number()),
});
export type RogueMonsterGroupValue = z.infer<
  typeof RogueMonsterGroupValueSchema
>;
