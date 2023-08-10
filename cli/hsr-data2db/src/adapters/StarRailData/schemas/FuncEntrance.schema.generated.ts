import * as z from "zod";

export const FirstWorldTextSchema = z.enum(["", "Store", "Travel Log"]);
export type FirstWorldText = z.infer<typeof FirstWorldTextSchema>;

export const FuncNameSchema = z.object({
  Hash: z.number(),
});
export type FuncName = z.infer<typeof FuncNameSchema>;

export const FuncEntranceValueSchema = z.object({
  ID: z.number(),
  FuncName: FuncNameSchema,
  FuncIconPath: z.string(),
  FuncHudIconPath: z.string(),
  GotoID: z.union([z.number(), z.null()]).optional(),
  UnlockDesc: FuncNameSchema,
  RedDot: z.string(),
  RedDotHud: z.string(),
  UnlockPrompt: z.union([z.number(), z.null()]).optional(),
  UnLockIconPath: z.string(),
  NotInScheduleToast: FuncNameSchema,
  FirstWorldText: FirstWorldTextSchema,
  UnlockID: z.union([z.number(), z.null()]).optional(),
  UnlockMainMission: z.union([z.number(), z.null()]).optional(),
  ParentSystem: z.union([z.number(), z.null()]).optional(),
  IsLargeBtn: z.union([z.boolean(), z.null()]).optional(),
});
export type FuncEntranceValue = z.infer<typeof FuncEntranceValueSchema>;
