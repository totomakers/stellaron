import * as z from 'zod'

export const PropTriggerEventValueSchema = z.object({
  ID: z.number(),
  Name: z.string(),
  JsonPath: z.string(),
  ExitJsonPath: z.string(),
})
export type PropTriggerEventValue = z.infer<typeof PropTriggerEventValueSchema>
