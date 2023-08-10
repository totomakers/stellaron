import * as z from "zod";

export const TextSchema = z.object({
  Hash: z.number(),
});
export type Text = z.infer<typeof TextSchema>;

export const ReportTypeValueSchema = z.object({
  TypeID: z.number(),
  Text: TextSchema,
});
export type ReportTypeValue = z.infer<typeof ReportTypeValueSchema>;
