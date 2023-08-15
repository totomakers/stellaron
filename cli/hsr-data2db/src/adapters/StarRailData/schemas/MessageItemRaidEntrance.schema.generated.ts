import * as z from 'zod'

export const MessageItemRaidEntranceValueSchema = z.object({
  ID: z.number(),
  RaidID: z.number(),
  ImagePath: z.string(),
  InvalidMissionList: z.array(z.number()),
})
export type MessageItemRaidEntranceValue = z.infer<
  typeof MessageItemRaidEntranceValueSchema
>
