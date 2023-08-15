import * as z from "zod";

export const GroupNameSchema = z.object({
  Hash: z.number(),
});
export type GroupName = z.infer<typeof GroupNameSchema>;

export const BackGroundMusicGroupValueSchema = z.object({
  ID: z.number(),
  GroupName: GroupNameSchema,
  GroupIcon: z.string(),
});
export type BackGroundMusicGroupValue = z.infer<
  typeof BackGroundMusicGroupValueSchema
>;
