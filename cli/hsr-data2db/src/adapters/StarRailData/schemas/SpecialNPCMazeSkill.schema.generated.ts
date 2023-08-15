import * as z from "zod";

export const MazeSkillSchema = z.object({
  Hash: z.number(),
});
export type MazeSkill = z.infer<typeof MazeSkillSchema>;

export const SpecialNpcMazeSkillValueSchema = z.object({
  MazeSkillId: z.number(),
  MazeSkillName: MazeSkillSchema,
  MazeSkilltype: z.number(),
  MazeSkillDesc: MazeSkillSchema,
  RelatedAvatarSkill: z.number(),
  SkillTriggerKey: z.string(),
  MPCost: z.union([z.number(), z.null()]).optional(),
});
export type SpecialNpcMazeSkillValue = z.infer<
  typeof SpecialNpcMazeSkillValueSchema
>;
