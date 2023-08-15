import * as z from "zod";

export const NpcMonsterMarkValueSchema = z.object({
  ID: z.number(),
  GroupID: z.number(),
  InstanceID: z.number(),
});
export type NpcMonsterMarkValue = z.infer<typeof NpcMonsterMarkValueSchema>;
