import * as z from "zod";

export const SpecialNpcDataValueSchema = z.object({
  ID: z.number(),
  PrefabPath: z.string(),
  JsonPath: z.string(),
  MazeSkillIdList: z.array(z.any()),
});
export type SpecialNpcDataValue = z.infer<typeof SpecialNpcDataValueSchema>;
