import * as z from "zod";

export const RogueBuffTypeSubTitleClassSchema = z.object({
  Hash: z.number(),
});
export type RogueBuffTypeSubTitleClass = z.infer<
  typeof RogueBuffTypeSubTitleClassSchema
>;

export const RogueBuffTypeValueSchema = z.object({
  RogueBuffType: z.number(),
  RogueBuffTypeTextmapID: RogueBuffTypeSubTitleClassSchema,
  RogueBuffTypeIcon: z.string(),
  RogueBuffTypeTitle: RogueBuffTypeSubTitleClassSchema,
  RugueBuffTypeRewardQuestList: z.array(z.number()),
  RogueBuffTypeSubTitle: RogueBuffTypeSubTitleClassSchema,
});
export type RogueBuffTypeValue = z.infer<typeof RogueBuffTypeValueSchema>;
