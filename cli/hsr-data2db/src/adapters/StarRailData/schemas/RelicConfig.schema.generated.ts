import * as z from "zod";

export const RaritySchema = z.enum([
  "CombatPowerRelicRarity2",
  "CombatPowerRelicRarity3",
  "CombatPowerRelicRarity4",
  "CombatPowerRelicRarity5",
]);
export type Rarity = z.infer<typeof RaritySchema>;

export const TypeSchema = z.enum([
  "BODY",
  "FOOT",
  "HAND",
  "HEAD",
  "NECK",
  "OBJECT",
]);
export type Type = z.infer<typeof TypeSchema>;

export const RelicConfigValueSchema = z.object({
  ID: z.number(),
  SetID: z.number(),
  Type: TypeSchema,
  Rarity: RaritySchema,
  MainAffixGroup: z.number(),
  SubAffixGroup: z.number(),
  MaxLevel: z.number(),
  ExpType: z.number(),
  ExpProvide: z.number(),
  CoinCost: z.number(),
});
export type RelicConfigValue = z.infer<typeof RelicConfigValueSchema>;
