import * as z from 'zod'

export const ItemTypeSchema = z.enum(['Image', 'Raid', 'Sticker', 'Text'])
export type ItemType = z.infer<typeof ItemTypeSchema>

export const SenderSchema = z.enum(['NPC', 'Player', 'PlayerAuto', 'System'])
export type Sender = z.infer<typeof SenderSchema>

export const NTextSchema = z.object({
  Hash: z.number(),
})
export type NText = z.infer<typeof NTextSchema>

export const MessageItemConfigValueSchema = z.object({
  ID: z.number(),
  Sender: SenderSchema,
  ItemType: ItemTypeSchema,
  MainText: NTextSchema,
  OptionText: NTextSchema,
  NextItemIDList: z.array(z.number()),
  SectionID: z.union([z.number(), z.null()]).optional(),
  ContactsID: z.union([z.number(), z.null()]).optional(),
  ItemImageID: z.union([z.number(), z.null()]).optional(),
})
export type MessageItemConfigValue = z.infer<
  typeof MessageItemConfigValueSchema
>
