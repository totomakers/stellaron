import * as z from "zod";

export const MonsterStatusResistanceTypeValueSchema = z.object({
  Type: z.string(),
  Icon: z.string(),
});
export type MonsterStatusResistanceTypeValue = z.infer<
  typeof MonsterStatusResistanceTypeValueSchema
>;
