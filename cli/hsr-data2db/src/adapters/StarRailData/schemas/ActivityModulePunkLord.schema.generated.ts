import * as z from "zod";

export const The1Schema = z.object({
  ID: z.number(),
  ActivityModuleID: z.number(),
});
export type The1 = z.infer<typeof The1Schema>;

export const ActivityModulePunkLordSchema = z.object({
  "1": The1Schema,
});
export type ActivityModulePunkLord = z.infer<
  typeof ActivityModulePunkLordSchema
>;
