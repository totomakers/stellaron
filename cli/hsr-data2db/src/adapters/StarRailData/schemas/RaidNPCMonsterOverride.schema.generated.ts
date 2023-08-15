import * as z from 'zod'

export const RaidNpcMonsterOverrideValueSchema = z.object({
  RaidID: z.number(),
  HardLevel: z.number(),
  GroupID: z.number(),
  ConfigIDList: z.array(z.number()),
  NpcMonsterIDList: z.array(z.number()),
  PlaneEventIDList: z.array(z.number()),
})
export type RaidNpcMonsterOverrideValue = z.infer<
  typeof RaidNpcMonsterOverrideValueSchema
>
