import * as z from "zod";

export const RelicTypeSchema = z.enum(["BODY", "FOOT", "NECK", "OBJECT"]);
export type RelicType = z.infer<typeof RelicTypeSchema>;

export const PropertyListSchema = z.object({
  RelicType: RelicTypeSchema,
  PropertyType: z.string(),
});
export type PropertyList = z.infer<typeof PropertyListSchema>;

export const AvatarRelicRecommendValueSchema = z.object({
  AvatarID: z.number(),
  Set4IDList: z.array(z.number()),
  Set2IDList: z.array(z.number()),
  PropertyList: z.array(PropertyListSchema),
});
export type AvatarRelicRecommendValue = z.infer<
  typeof AvatarRelicRecommendValueSchema
>;
