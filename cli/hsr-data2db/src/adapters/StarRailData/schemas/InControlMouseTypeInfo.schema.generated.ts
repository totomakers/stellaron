import * as z from 'zod'

export const InControlMouseTypeInfoValueSchema = z.object({
  controlType: z.string(),
  iconForMouse: z.string(),
})
export type InControlMouseTypeInfoValue = z.infer<
  typeof InControlMouseTypeInfoValueSchema
>
