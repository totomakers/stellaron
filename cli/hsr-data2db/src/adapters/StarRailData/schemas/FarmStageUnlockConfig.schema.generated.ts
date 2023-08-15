import * as z from "zod";

export const FarmTypeSchema = z.enum([
  "COCOON",
  "COCOON2",
  "COCOON3",
  "ELEMENT",
  "RELIC",
]);
export type FarmType = z.infer<typeof FarmTypeSchema>;

export const FarmStageUnlockConfigValueSchema = z.object({
  ID: z.number(),
  FarmType: FarmTypeSchema,
  UnlockWorldLevelEnd: z.number(),
  UnlockWorldLevelStart: z.union([z.number(), z.null()]).optional(),
});
export type FarmStageUnlockConfigValue = z.infer<
  typeof FarmStageUnlockConfigValueSchema
>;
