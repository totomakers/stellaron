import * as z from 'zod'

export const MenuItemExtraInfoValueSchema = z.object({
  ID: z.number(),
  Condition: z.string(),
  ExtraInfoType: z.array(z.number()),
  ExtraInfoParam: z.string(),
})
export type MenuItemExtraInfoValue = z.infer<
  typeof MenuItemExtraInfoValueSchema
>
