import * as z from "zod";

export const GroupTypeSchema = z.enum(["Free", "Simple"]);
export type GroupType = z.infer<typeof GroupTypeSchema>;

export const IconTypeSchema = z.enum([
  "ChatContinueIcon",
  "ChatIcon",
  "ChatMissionIcon",
  "ChatOutIcon",
  "LevelIcon",
  "ShopIcon",
]);
export type IconType = z.infer<typeof IconTypeSchema>;

export const DialogueNpcValueSchema = z.object({
  GroupID: z.number(),
  GroupType: GroupTypeSchema,
  InteractTitle: z.string(),
  ConditionIDs: z.array(z.number()),
  Priority: z.union([z.number(), z.null()]).optional(),
  IconType: IconTypeSchema,
  ActPath: z.string(),
});
export type DialogueNpcValue = z.infer<typeof DialogueNpcValueSchema>;
