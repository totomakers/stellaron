import * as z from "zod";

export const BlackListKeySchema = z.enum([
  "A",
  "D",
  "Escape",
  "Home",
  "LeftAlt",
  "S",
  "Tab",
  "W",
]);
export type BlackListKey = z.infer<typeof BlackListKeySchema>;

export const ActionSettingValueSchema = z.object({
  ActionName: z.string(),
  GroupType: z.number(),
  ShowType: z.number(),
  BlackListKeys: z.array(BlackListKeySchema),
  SettableInControlTypes: z.array(z.string()),
});
export type ActionSettingValue = z.infer<typeof ActionSettingValueSchema>;
