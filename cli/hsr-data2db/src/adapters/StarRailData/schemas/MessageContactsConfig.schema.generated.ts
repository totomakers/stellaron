import * as z from 'zod'

export const NameSchema = z.object({
  Hash: z.number(),
})
export type Name = z.infer<typeof NameSchema>

export const MessageContactsConfigValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
  IconPath: z.string(),
  SignatureText: NameSchema,
  ContactsType: z.union([z.number(), z.null()]).optional(),
  ContactsCamp: z.union([z.number(), z.null()]).optional(),
})
export type MessageContactsConfigValue = z.infer<
  typeof MessageContactsConfigValueSchema
>
