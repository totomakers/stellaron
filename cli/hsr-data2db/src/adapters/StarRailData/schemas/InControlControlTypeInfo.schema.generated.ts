import * as z from 'zod'

export const InControlControlTypeInfoValueSchema = z.object({
  controlType: z.string(),
  isSettingControlType: z.union([z.boolean(), z.null()]).optional(),
  iconForSony: z.string(),
  iconForXBox: z.string(),
  iconForSwitch: z.string(),
})
export type InControlControlTypeInfoValue = z.infer<
  typeof InControlControlTypeInfoValueSchema
>
