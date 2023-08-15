import * as z from 'zod'

export const The800001Schema = z.object({
  ID: z.number(),
  BeginTime: z.coerce.date(),
  EndTime: z.coerce.date(),
})
export type The800001 = z.infer<typeof The800001Schema>

export const ScheduleDataDropLimitSchema = z.object({
  '800001': The800001Schema,
})
export type ScheduleDataDropLimit = z.infer<typeof ScheduleDataDropLimitSchema>
