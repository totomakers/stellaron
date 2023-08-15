import * as z from "zod";

export const BillboardIconConfigValueSchema = z.object({
  ID: z.number(),
  Priority: z.number(),
  BillboardIconPath: z.string(),
});
export type BillboardIconConfigValue = z.infer<
  typeof BillboardIconConfigValueSchema
>;
