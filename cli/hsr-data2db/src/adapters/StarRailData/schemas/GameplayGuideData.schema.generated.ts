import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const GameplayGuideDataValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
  IconPath: z.string(),
  TabIconPath: z.string(),
  MapEntranceID: z.number(),
  UnlockMission: z.array(z.number()),
  TabID: z.number(),
  RelatedID: z.number(),
});
export type GameplayGuideDataValue = z.infer<
  typeof GameplayGuideDataValueSchema
>;
