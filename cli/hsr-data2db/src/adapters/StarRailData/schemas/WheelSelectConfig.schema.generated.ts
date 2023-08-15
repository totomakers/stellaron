import * as z from 'zod'

export const DescriptionSchema = z.object({
  Hash: z.number(),
})
export type Description = z.infer<typeof DescriptionSchema>

export const WheelSelectConfigValueSchema = z.object({
  IndexID: z.number(),
  FuncName: DescriptionSchema,
  Description: DescriptionSchema,
  IconPath: z.string(),
  GameModeList: z.array(z.number()),
  FuncGotoIDList: z.array(z.number()),
  UnlockID: z.number(),
  Order: z.number(),
})
export type WheelSelectConfigValue = z.infer<
  typeof WheelSelectConfigValueSchema
>
