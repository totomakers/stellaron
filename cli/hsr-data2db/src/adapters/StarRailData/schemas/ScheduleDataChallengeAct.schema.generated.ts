import * as z from 'zod'

export const ScheduleDataChallengeActSchema = z.object({})
export type ScheduleDataChallengeAct = z.infer<
  typeof ScheduleDataChallengeActSchema
>
