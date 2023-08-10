import * as z from "zod";

export const TextSchema = z.object({
  Hash: z.number(),
});
export type Text = z.infer<typeof TextSchema>;

export const RetCodeErrorValueSchema = z.object({
  ErrorID: z.number(),
  Text: TextSchema,
  IsPileToastCenter: z.union([z.boolean(), z.null()]).optional(),
});
export type RetCodeErrorValue = z.infer<typeof RetCodeErrorValueSchema>;
