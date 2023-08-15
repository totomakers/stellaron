import * as z from "zod";

export const BaseTypeSchema = z.object({
  Hash: z.number(),
});
export type BaseType = z.infer<typeof BaseTypeSchema>;

export const KnightSchema = z.object({
  ID: z.string(),
  BaseTypeIcon: z.string(),
  BaseTypeIconMiddle: z.string(),
  BaseTypeIconSmall: z.string(),
  EquipmentLightMatPath: z.string(),
  Equipment3DTgaPath: z.string(),
  BaseTypeIconPathTalk: z.string(),
  BgPath: z.string(),
  BaseTypeText: BaseTypeSchema,
  BaseTypeDesc: BaseTypeSchema,
  FirstWordText: z.string(),
});
export type Knight = z.infer<typeof KnightSchema>;

export const AvatarBaseTypeSchema = z.object({
  Warrior: KnightSchema,
  Rogue: KnightSchema,
  Mage: KnightSchema,
  Shaman: KnightSchema,
  Warlock: KnightSchema,
  Knight: KnightSchema,
  Priest: KnightSchema,
  Unknown: KnightSchema,
});
export type AvatarBaseType = z.infer<typeof AvatarBaseTypeSchema>;
