import * as z from "zod";

export const ContentPathSchema = z.enum(["", "OffsetRoot"]);
export type ContentPath = z.infer<typeof ContentPathSchema>;

export const KeyMapPathSchema = z.enum([
  "AreaInfoPanel/Title/KeyMap",
  "",
  "OffsetRoot/Root/KeyMap",
]);
export type KeyMapPath = z.infer<typeof KeyMapPathSchema>;

export const TextPathSchema = z.enum([
  "AreaInfoPanel/Title/Text",
  "",
  "OffsetRoot/Root/Text",
]);
export type TextPath = z.infer<typeof TextPathSchema>;

export const TutorialResConfigValueSchema = z.object({
  ID: z.number(),
  PrefabPath: z.string(),
  TextPath: TextPathSchema,
  KeyMapPath: KeyMapPathSchema,
  ContentPath: ContentPathSchema,
});
export type TutorialResConfigValue = z.infer<
  typeof TutorialResConfigValueSchema
>;
