import * as z from "zod";

export const StorySchema = z.object({
  Hash: z.number(),
});
export type Story = z.infer<typeof StorySchema>;

export const StoryAtlasValueSchema = z.object({
  AvatarID: z.number(),
  StoryID: z.number(),
  Story: StorySchema,
  Unlock: z.union([z.number(), z.null()]).optional(),
});
export type StoryAtlasValue = z.infer<typeof StoryAtlasValueSchema>;
