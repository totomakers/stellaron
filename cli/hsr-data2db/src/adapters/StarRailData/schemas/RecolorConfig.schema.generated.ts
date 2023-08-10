import * as z from "zod";

export const RecolorConfigValueSchema = z.object({
  ID: z.number(),
  DefaultColor: z.string(),
  WhiteBGColor: z.string(),
});
export type RecolorConfigValue = z.infer<typeof RecolorConfigValueSchema>;
