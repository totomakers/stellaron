import * as z from "zod";

export const TypeSchema = z.enum([
  "eventmission_state_equal",
  "submission_state_equal",
]);
export type Type = z.infer<typeof TypeSchema>;

export const DialogueConditionValueSchema = z.object({
  ID: z.number(),
  Type: TypeSchema,
  Param1: z.number(),
  Param2: z.union([z.number(), z.null()]).optional(),
});
export type DialogueConditionValue = z.infer<
  typeof DialogueConditionValueSchema
>;
