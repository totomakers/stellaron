import * as z from 'zod'

export const EventMissionChallengeValueSchema = z.object({
  ID: z.number(),
  LimitTime: z.union([z.number(), z.null()]).optional(),
  IsBeginPrepare: z.union([z.boolean(), z.null()]).optional(),
  IsCancellable: z.union([z.boolean(), z.null()]).optional(),
  IsResetable: z.union([z.boolean(), z.null()]).optional(),
})
export type EventMissionChallengeValue = z.infer<
  typeof EventMissionChallengeValueSchema
>
