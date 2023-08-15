import * as z from "zod";

export const RogueMapValueSchema = z.object({
  RogueMapID: z.number(),
  SiteID: z.number(),
  IsStart: z.union([z.boolean(), z.null()]).optional(),
  PosX: z.number(),
  PosY: z.number(),
  NextSiteIDList: z.array(z.number()),
  HardLevelGroup: z.union([z.number(), z.null()]).optional(),
  Level: z.union([z.number(), z.null()]).optional(),
});
export type RogueMapValue = z.infer<typeof RogueMapValueSchema>;
