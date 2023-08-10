import * as z from "zod";

export const WorldSchema = z.object({
  Hash: z.number(),
});
export type World = z.infer<typeof WorldSchema>;

export const WorldConfigValueSchema = z.object({
  ID: z.number(),
  WorldName: WorldSchema,
  WorldDesc: WorldSchema,
  DynamicOptionalBlock: z.string(),
  IsRealWorld: z.union([z.boolean(), z.null()]).optional(),
  IsShow: z.union([z.boolean(), z.null()]).optional(),
});
export type WorldConfigValue = z.infer<typeof WorldConfigValueSchema>;
