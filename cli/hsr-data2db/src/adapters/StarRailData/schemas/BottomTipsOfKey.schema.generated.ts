import * as z from "zod";

export const BottomTipsOfKeyValueSchema = z.object({
  ContextName: z.string(),
  ActionNameList: z.array(z.string()),
});
export type BottomTipsOfKeyValue = z.infer<typeof BottomTipsOfKeyValueSchema>;
