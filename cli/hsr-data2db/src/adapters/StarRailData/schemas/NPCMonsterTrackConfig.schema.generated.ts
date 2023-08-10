import * as z from "zod";

export const NpcMonsterTrackConfigValueSchema = z.object({
  ID: z.number(),
  MapEntranceID: z.number(),
  NPCMonsterMarkList: z.array(z.number()),
  SortID: z.number(),
});
export type NpcMonsterTrackConfigValue = z.infer<
  typeof NpcMonsterTrackConfigValueSchema
>;
