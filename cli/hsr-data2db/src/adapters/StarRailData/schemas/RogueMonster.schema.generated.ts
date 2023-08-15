import * as z from "zod";

export const MonsterDropTypeSchema = z.enum(["AreaDrop"]);
export type MonsterDropType = z.infer<typeof MonsterDropTypeSchema>;

export const RogueMonsterValueSchema = z.object({
  RogueMonsterID: z.number(),
  MonsterDropType: z.union([MonsterDropTypeSchema, z.null()]).optional(),
});
export type RogueMonsterValue = z.infer<typeof RogueMonsterValueSchema>;
