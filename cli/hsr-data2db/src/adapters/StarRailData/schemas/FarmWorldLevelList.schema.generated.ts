import * as z from "zod";

export const CocoonSchema = z.object({
  FarmType: z.string(),
  WorldLevelList: z.array(z.number()),
});
export type Cocoon = z.infer<typeof CocoonSchema>;

export const FarmWorldLevelListSchema = z.object({
  COCOON: CocoonSchema,
  COCOON2: CocoonSchema,
  ELEMENT: CocoonSchema,
  RELIC: CocoonSchema,
  COCOON3: CocoonSchema,
});
export type FarmWorldLevelList = z.infer<typeof FarmWorldLevelListSchema>;
