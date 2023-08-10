import * as z from "zod";

export const FreeStyleCharacterConfigValueSchema = z.object({
  FreeStyleCharacterID: z.string(),
  FreeStyleJsonConfigPath: z.string(),
});
export type FreeStyleCharacterConfigValue = z.infer<
  typeof FreeStyleCharacterConfigValueSchema
>;
