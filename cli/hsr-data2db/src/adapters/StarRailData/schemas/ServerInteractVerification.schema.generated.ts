import * as z from "zod";

export const ServerInteractVerificationValueSchema = z.object({
  ID: z.number(),
  InteractType: z.string(),
  InteractTypeConfig: z.array(z.number()),
});
export type ServerInteractVerificationValue = z.infer<
  typeof ServerInteractVerificationValueSchema
>;
