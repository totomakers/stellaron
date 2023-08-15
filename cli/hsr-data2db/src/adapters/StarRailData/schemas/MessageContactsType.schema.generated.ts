import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const MessageContactsTypeValueSchema = z.object({
  ContactsType: z.number(),
  Name: NameSchema,
  SortID: z.number(),
});
export type MessageContactsTypeValue = z.infer<
  typeof MessageContactsTypeValueSchema
>;
