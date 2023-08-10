import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const FantasticStoryChapterValueSchema = z.object({
  ChapterID: z.number(),
  Name: NameSchema,
  describe: NameSchema,
  FigurePath: z.string(),
  MissionID: z.number(),
  ActivityModuleID: z.number(),
});
export type FantasticStoryChapterValue = z.infer<
  typeof FantasticStoryChapterValueSchema
>;
