import * as z from "zod";

export const PermanentRecordDataValueSchema = z.object({
  RecordID: z.number(),
  RefreshID: z.number(),
});
export type PermanentRecordDataValue = z.infer<
  typeof PermanentRecordDataValueSchema
>;
