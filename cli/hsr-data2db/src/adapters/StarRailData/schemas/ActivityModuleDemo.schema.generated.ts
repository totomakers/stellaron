import * as z from "zod";

export const ActivityModuleDemoValueSchema = z.object({
  ActivityModuleID: z.number(),
  AvatarDemoStageID: z.number(),
  Sort: z.number(),
  AvatarDemoType: z.union([z.null(), z.string()]).optional(),
});
export type ActivityModuleDemoValue = z.infer<
  typeof ActivityModuleDemoValueSchema
>;
