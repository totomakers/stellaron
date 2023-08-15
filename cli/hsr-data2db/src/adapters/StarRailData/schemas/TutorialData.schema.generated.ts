import * as z from "zod";

export const RestoreTypeSchema = z.enum(["AutoFinish"]);
export type RestoreType = z.infer<typeof RestoreTypeSchema>;

export const TriggerParamSchema = z.object({
  TriggerType: z.string(),
  TriggerParam: z.string(),
});
export type TriggerParam = z.infer<typeof TriggerParamSchema>;

export const TutorialDataValueSchema = z.object({
  TutorialID: z.number(),
  Priority: z.union([z.number(), z.null()]).optional(),
  TutorialJsonPath: z.string(),
  TriggerParams: z.array(TriggerParamSchema),
  FinishTriggerParams: z.array(TriggerParamSchema),
  RestoreType: z.union([RestoreTypeSchema, z.null()]).optional(),
  CanInterrupt: z.union([z.boolean(), z.null()]).optional(),
});
export type TutorialDataValue = z.infer<typeof TutorialDataValueSchema>;
