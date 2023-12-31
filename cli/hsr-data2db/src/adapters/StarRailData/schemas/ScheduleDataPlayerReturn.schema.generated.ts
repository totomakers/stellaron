import * as z from 'zod'

export const The400001Schema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type The400001 = z.infer<typeof The400001Schema>

export const ScheduleDataPlayerReturnSchema = z.object({
  '400001': The400001Schema,
})
export type ScheduleDataPlayerReturn = z.infer<
  typeof ScheduleDataPlayerReturnSchema
>
