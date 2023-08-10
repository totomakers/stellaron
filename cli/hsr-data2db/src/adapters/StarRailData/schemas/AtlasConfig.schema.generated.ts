import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const AtlasConfigValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
});
export type AtlasConfigValue = z.infer<typeof AtlasConfigValueSchema>;
