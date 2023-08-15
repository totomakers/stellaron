import * as z from "zod";

export const MappingInfoConnectionValueSchema = z.object({
  SourceEntranceID: z.number(),
  SourceMappingInfoID: z.number(),
  TargetEntranceID: z.number(),
  TargetMappingInfoID: z.union([z.number(), z.null()]).optional(),
});
export type MappingInfoConnectionValue = z.infer<
  typeof MappingInfoConnectionValueSchema
>;
