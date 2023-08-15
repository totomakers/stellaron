import * as z from "zod";

export const MessageSectionConfigValueSchema = z.object({
  ID: z.number(),
  StartMessageItemIDList: z.array(z.number()),
  IsPerformMessage: z.union([z.boolean(), z.null()]).optional(),
  MainMissionLink: z.union([z.number(), z.null()]).optional(),
});
export type MessageSectionConfigValue = z.infer<
  typeof MessageSectionConfigValueSchema
>;
