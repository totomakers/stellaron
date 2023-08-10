import * as z from "zod";

export const ActionOperationSetValueSchema = z.object({
  ID: z.number(),
  ActionNameList: z.array(z.string()),
});
export type ActionOperationSetValue = z.infer<
  typeof ActionOperationSetValueSchema
>;
