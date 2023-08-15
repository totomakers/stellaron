import * as z from 'zod'

export const GroupTypeSchema = z.enum(['Free', 'Simple'])
export type GroupType = z.infer<typeof GroupTypeSchema>

export const IconTypeSchema = z.enum([
  'ChatContinueIcon',
  'ChatIcon',
  'ChatMissionIcon',
  'ChatOutIcon',
  'CheckIcon',
  'LevelIcon',
  'ShopIcon',
])
export type IconType = z.infer<typeof IconTypeSchema>

export const DialoguePropValueSchema = z.object({
  GroupID: z.number(),
  GroupType: GroupTypeSchema,
  InteractTitle: z.string(),
  ConditionIDs: z.array(z.number()),
  Priority: z.union([z.number(), z.null()]).optional(),
  IconType: IconTypeSchema,
  ActPath: z.string(),
})
export type DialoguePropValue = z.infer<typeof DialoguePropValueSchema>
