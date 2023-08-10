import * as z from "zod";

export const The0Schema = z.object({
  ID: z.number(),
  WorldLevel: z.number(),
  ModuleID: z.number(),
});
export type The0 = z.infer<typeof The0Schema>;

export const SpecialMappingInfoValueSchema = z.object({
  "0": The0Schema,
});
export type SpecialMappingInfoValue = z.infer<
  typeof SpecialMappingInfoValueSchema
>;
