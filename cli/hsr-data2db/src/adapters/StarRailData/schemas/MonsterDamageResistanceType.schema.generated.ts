import * as z from "zod";

export const FireSchema = z.object({
  Type: z.string(),
  Icon: z.string(),
});
export type Fire = z.infer<typeof FireSchema>;

export const MonsterDamageResistanceTypeSchema = z.object({
  Physical: FireSchema,
  Fire: FireSchema,
  Ice: FireSchema,
  Thunder: FireSchema,
  Wind: FireSchema,
  Quantum: FireSchema,
  Imaginary: FireSchema,
});
export type MonsterDamageResistanceType = z.infer<
  typeof MonsterDamageResistanceTypeSchema
>;
