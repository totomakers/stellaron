import * as z from 'zod'

export const ShowStringSchema = z.object({
  Hash: z.number(),
})
export type ShowString = z.infer<typeof ShowStringSchema>

export const SettingImageQualityValueSchema = z.object({
  ID: z.string(),
  ShowString: ShowStringSchema,
})
export type SettingImageQualityValue = z.infer<
  typeof SettingImageQualityValueSchema
>
