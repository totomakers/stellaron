import * as z from 'zod'

export const SkillTriggerKeySchema = z.enum(['MazeSkill', 'NormalAtk'])
export type SkillTriggerKey = z.infer<typeof SkillTriggerKeySchema>

export const MazeSkillDescClassSchema = z.object({
  Hash: z.number(),
})
export type MazeSkillDescClass = z.infer<typeof MazeSkillDescClassSchema>

export const MazeSkillValueSchema = z.object({
  MazeSkillId: z.number(),
  MazeSkillName: MazeSkillDescClassSchema,
  MazeSkilltype: z.number(),
  MazeSkillDesc: MazeSkillDescClassSchema,
  RelatedAvatarSkill: z.number(),
  SkillTriggerKey: SkillTriggerKeySchema,
  MPCost: z.union([z.number(), z.null()]).optional(),
})
export type MazeSkillValue = z.infer<typeof MazeSkillValueSchema>
