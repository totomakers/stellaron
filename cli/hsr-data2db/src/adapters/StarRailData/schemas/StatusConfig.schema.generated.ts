import * as z from "zod";

export const StatusTypeSchema = z.enum(["Buff", "Debuff", "Other"]);
export type StatusType = z.infer<typeof StatusTypeSchema>;

export const StatusSchema = z.object({
  Hash: z.number(),
});
export type Status = z.infer<typeof StatusSchema>;

export const StatusConfigValueSchema = z.object({
  StatusID: z.number(),
  ModifierName: z.string(),
  StatusName: StatusSchema,
  StatusType: StatusTypeSchema,
  StatusDesc: StatusSchema,
  StatusIconPath: z.string(),
  StatusEffect: StatusSchema,
  CanDispel: z.union([z.boolean(), z.null()]).optional(),
  ReadParamList: z.array(z.string()),
});
export type StatusConfigValue = z.infer<typeof StatusConfigValueSchema>;
