import * as z from "zod";

export const StageInfiniteMonsterGroupValueSchema = z.object({
  InfiniteMonsterGroupID: z.number(),
  MonsterList: z.array(z.number()),
  EliteGroup: z.number(),
});
export type StageInfiniteMonsterGroupValue = z.infer<
  typeof StageInfiniteMonsterGroupValueSchema
>;
