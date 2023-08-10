import * as z from "zod";

export const BaseTypeTextSchema = z.object({
  Hash: z.number(),
});
export type BaseTypeText = z.infer<typeof BaseTypeTextSchema>;

export const BodySchema = z.object({
  Type: z.string(),
  BaseTypeText: BaseTypeTextSchema,
  BaseTypeIconPath: z.string(),
});
export type Body = z.infer<typeof BodySchema>;

export const RelicBaseTypeSchema = z.object({
  HEAD: BodySchema,
  HAND: BodySchema,
  BODY: BodySchema,
  FOOT: BodySchema,
  NECK: BodySchema,
  OBJECT: BodySchema,
  Unknow: BodySchema,
});
export type RelicBaseType = z.infer<typeof RelicBaseTypeSchema>;
