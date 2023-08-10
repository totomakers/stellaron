import * as z from "zod";

export const LightConeSchema = z.object({
  "22000": DecalSchema,
});
export type LightCone = z.infer<typeof LightConeSchema>;

export const DecalSchema = z.object({
  Type: z.string(),
  TypeParam: z.number(),
  PositionID: z.union([z.number(), z.null()]).optional(),
  QuestID: z.number(),
});
export type Decal = z.infer<typeof DecalSchema>;

export const SilverWolfCollectionSchema = z.object({
  Decal: z.record(z.string(), DecalSchema),
  LightCone: LightConeSchema,
});
export type SilverWolfCollection = z.infer<typeof SilverWolfCollectionSchema>;
