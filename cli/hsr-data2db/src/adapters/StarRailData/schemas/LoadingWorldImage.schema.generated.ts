import * as z from "zod";

export const LoadingWorldImageValueSchema = z.object({
  WorldID: z.number(),
  ImagePath: z.string(),
});
export type LoadingWorldImageValue = z.infer<
  typeof LoadingWorldImageValueSchema
>;
