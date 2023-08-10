import * as z from "zod";

export const StageInfiniteGroupValueSchema = z.object({
  WaveGroupID: z.number(),
  WaveIDList: z.array(z.number()),
});
export type StageInfiniteGroupValue = z.infer<
  typeof StageInfiniteGroupValueSchema
>;
