import * as z from "zod";

export const DynamicParamTypeSchema = z.enum([
  "Append",
  "ReplaceAll",
  "ReplaceOne",
]);
export type DynamicParamType = z.infer<typeof DynamicParamTypeSchema>;

export const ContentTextSchema = z.object({
  Hash: z.number(),
});
export type ContentText = z.infer<typeof ContentTextSchema>;

export const DialogueDynamicContentValueSchema = z.object({
  DynamicContentID: z.number(),
  ArgID: z.number(),
  ContentText: ContentTextSchema,
  DynamicParamType: DynamicParamTypeSchema,
  DynamicParamList: z.array(z.number()),
});
export type DialogueDynamicContentValue = z.infer<
  typeof DialogueDynamicContentValueSchema
>;
