import * as z from "zod";

export const CeilingDescSchema = z.object({
  Hash: z.number(),
});
export type CeilingDesc = z.infer<typeof CeilingDescSchema>;

export const CeilingCharacterInfoValueSchema = z.object({
  CharacterID: z.number(),
  CeilingDesc: CeilingDescSchema,
});
export type CeilingCharacterInfoValue = z.infer<
  typeof CeilingCharacterInfoValueSchema
>;
