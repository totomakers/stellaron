import * as z from "zod";

export const InclinationTypeValueSchema = z.object({
  InclinationTypeID: z.number(),
});
export type InclinationTypeValue = z.infer<typeof InclinationTypeValueSchema>;
