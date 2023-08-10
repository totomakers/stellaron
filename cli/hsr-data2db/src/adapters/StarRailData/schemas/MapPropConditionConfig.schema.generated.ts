import * as z from "zod";

export const RedDotTextSchema = z.object({
  Hash: z.number(),
});
export type RedDotText = z.infer<typeof RedDotTextSchema>;

export const MapPropConditionConfigValueSchema = z.object({
  ID: z.number(),
  UnlockID: z.union([z.number(), z.null()]).optional(),
  ActivityModuleID: z.number(),
  MappingInfoID: z.number(),
  MiniMapIconID: z.number(),
  Priority: z.number(),
  IsShowRedDot: z.union([z.boolean(), z.null()]).optional(),
  RedDotText: RedDotTextSchema,
});
export type MapPropConditionConfigValue = z.infer<
  typeof MapPropConditionConfigValueSchema
>;
