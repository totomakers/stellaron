import * as z from "zod";

export const LoadingSpecialTypeConfigSchema = z.object({});
export type LoadingSpecialTypeConfig = z.infer<
  typeof LoadingSpecialTypeConfigSchema
>;
