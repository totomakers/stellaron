import * as z from 'zod'

export const TextIdSchema = z.object({
  Hash: z.number(),
})
export type TextId = z.infer<typeof TextIdSchema>

export const MenuItemNameValueSchema = z.object({
  ID: z.number(),
  TextID: TextIdSchema,
})
export type MenuItemNameValue = z.infer<typeof MenuItemNameValueSchema>
