import * as z from "zod";

export const FranceKeyMouseImagePathSchema = z.enum([
  "",
  "SpriteOutput/KeyMapIcons/PC/IconMouseZQSD.png",
]);
export type FranceKeyMouseImagePath = z.infer<
  typeof FranceKeyMouseImagePathSchema
>;

export const KeyMouseImagePathSchema = z.enum([
  "",
  "SpriteOutput/KeyMapIcons/PC/IconMouseAll.png",
  "SpriteOutput/KeyMapIcons/PC/IconMouseWASD.png",
]);
export type KeyMouseImagePath = z.infer<typeof KeyMouseImagePathSchema>;

export const ActionGroupTextmapIdSchema = z.object({
  Hash: z.number(),
});
export type ActionGroupTextmapId = z.infer<typeof ActionGroupTextmapIdSchema>;

export const ActionGroupValueSchema = z.object({
  ActionGroupName: z.string(),
  ActionName: z.string(),
  ActionGroupTextmapID: ActionGroupTextmapIdSchema,
  KeyMouseImagePath: KeyMouseImagePathSchema,
  FranceKeyMouseImagePath: FranceKeyMouseImagePathSchema,
  GermanyKeyMouseImagePath: z.string(),
  XboxImagePath: z.string(),
  PsImagePath: z.string(),
});
export type ActionGroupValue = z.infer<typeof ActionGroupValueSchema>;
