import * as z from "zod";

export const KeyStringSchema = z.object({
  Hash: z.number(),
});
export type KeyString = z.infer<typeof KeyStringSchema>;

export const InControlKeyInfoValueSchema = z.object({
  key: z.string(),
  isSettingKey: z.union([z.boolean(), z.null()]).optional(),
  keyString: KeyStringSchema,
  keyStringFrance: KeyStringSchema,
  keyStringGermany: KeyStringSchema,
});
export type InControlKeyInfoValue = z.infer<typeof InControlKeyInfoValueSchema>;
