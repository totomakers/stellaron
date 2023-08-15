import * as z from 'zod'

export const LittleWheelSelectConfigValueSchema = z.object({
  GameMode: z.string(),
  Left1: z.array(z.number()),
  Left2: z.array(z.number()),
  Left3: z.array(z.any()),
  Left4: z.array(z.number()),
  Right1: z.array(z.number()),
  Right2: z.array(z.any()),
  Right3: z.array(z.any()),
  Right4: z.array(z.any()),
})
export type LittleWheelSelectConfigValue = z.infer<
  typeof LittleWheelSelectConfigValueSchema
>
