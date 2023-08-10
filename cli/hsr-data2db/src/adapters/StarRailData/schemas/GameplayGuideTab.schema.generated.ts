import * as z from "zod";

export const DescSchema = z.object({
  Hash: z.number(),
});
export type Desc = z.infer<typeof DescSchema>;

export const GameplayGuideTabValueSchema = z.object({
  ID: z.number(),
  Name: DescSchema,
  Priority: z.number(),
  GuideType: z.string(),
  Desc: DescSchema,
  ResBarKey: z.string(),
  IconPath: z.string(),
  IntroDataID: z.number(),
});
export type GameplayGuideTabValue = z.infer<typeof GameplayGuideTabValueSchema>;
