import * as z from "zod";

export const FuncEntranceListValueSchema = z.object({
  GameModeType: z.number(),
  FuncEntranceIDList: z.array(z.number()),
  BottomFuncEntranceIDList: z.array(z.number()),
  HudFuncEntranceIDList: z.array(z.number()),
  UnlockGotoTypeList: z.array(z.number()),
});
export type FuncEntranceListValue = z.infer<typeof FuncEntranceListValueSchema>;
