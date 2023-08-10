import * as z from "zod";

export const BreakBaseDamageSchema = z.object({
  Value: z.number(),
});
export type BreakBaseDamage = z.infer<typeof BreakBaseDamageSchema>;

export const AvatarBreakDamageValueSchema = z.object({
  Level: z.number(),
  BreakBaseDamage: BreakBaseDamageSchema,
});
export type AvatarBreakDamageValue = z.infer<
  typeof AvatarBreakDamageValueSchema
>;
