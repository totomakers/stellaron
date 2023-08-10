import * as z from "zod";

export const The1Schema = z.object({
  Mode: z.number(),
  ReceiveBuff: z.number(),
  LightHit: z.number(),
});
export type The1 = z.infer<typeof The1Schema>;

export const AutoFightVoSchema = z.object({
  "1": The1Schema,
});
export type AutoFightVo = z.infer<typeof AutoFightVoSchema>;
