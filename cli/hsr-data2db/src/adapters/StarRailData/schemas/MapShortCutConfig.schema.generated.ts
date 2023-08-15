import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const MapShortCutConfigValueSchema = z.object({
  ID: z.number(),
  Name: NameSchema,
  Type: z.string(),
  IconPath: z.string(),
  UnlockID: z.number(),
  EntranceID: z.number(),
  MappingInfoID: z.number(),
  Params: z.union([z.number(), z.null()]).optional(),
});
export type MapShortCutConfigValue = z.infer<
  typeof MapShortCutConfigValueSchema
>;
