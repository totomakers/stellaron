import * as z from "zod";

export const TypeSchema = z.enum([
  "BODY",
  "FOOT",
  "HAND",
  "HEAD",
  "NECK",
  "OBJECT",
]);
export type Type = z.infer<typeof TypeSchema>;

export const BodySchema = z.object({
  SetID: z.number(),
  Type: TypeSchema,
  IconPath: z.string(),
  ItemFigureIconPath: z.string(),
  RelicName: z.string(),
  ItemBGDesc: z.string(),
  BGStoryTitle: z.string(),
  BGStoryContent: z.string(),
});
export type Body = z.infer<typeof BodySchema>;

export const RelicDataInfoValueSchema = z.object({
  HEAD: z.union([BodySchema, z.null()]).optional(),
  HAND: z.union([BodySchema, z.null()]).optional(),
  BODY: z.union([BodySchema, z.null()]).optional(),
  FOOT: z.union([BodySchema, z.null()]).optional(),
  NECK: z.union([BodySchema, z.null()]).optional(),
  OBJECT: z.union([BodySchema, z.null()]).optional(),
});
export type RelicDataInfoValue = z.infer<typeof RelicDataInfoValueSchema>;
