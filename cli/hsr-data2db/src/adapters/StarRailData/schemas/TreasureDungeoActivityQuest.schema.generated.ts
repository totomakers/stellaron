import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const TreasureDungeoActivityQuestValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
  QuestList: z.array(z.number()),
  DungeonGroupID: z.union([z.number(), z.null()]).optional(),
});
export type TreasureDungeoActivityQuestValue = z.infer<
  typeof TreasureDungeoActivityQuestValueSchema
>;
