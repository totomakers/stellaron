import * as z from "zod";

export const EnterPageConfigValueSchema = z.object({
  Key: z.string(),
});
export type EnterPageConfigValue = z.infer<typeof EnterPageConfigValueSchema>;
