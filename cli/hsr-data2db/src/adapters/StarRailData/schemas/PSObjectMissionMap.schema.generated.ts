import * as z from 'zod'

export const PsObjectMissionMapValueSchema = z.object({
  ObjectID: z.number(),
  MissionIDList: z.array(z.number()),
})
export type PsObjectMissionMapValue = z.infer<
  typeof PsObjectMissionMapValueSchema
>
