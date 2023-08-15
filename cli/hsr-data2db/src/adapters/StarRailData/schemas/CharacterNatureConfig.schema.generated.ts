import * as z from "zod";

export const CharacterNatureConfigValueSchema = z.object({
  NatureID: z.number(),
  SpritePath: z.string(),
  NatureType: z.union([z.null(), z.string()]).optional(),
});
export type CharacterNatureConfigValue = z.infer<
  typeof CharacterNatureConfigValueSchema
>;
