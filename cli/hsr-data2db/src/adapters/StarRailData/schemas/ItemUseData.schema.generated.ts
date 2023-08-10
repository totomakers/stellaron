import * as z from "zod";

export const UseSubTypeSchema = z.enum(["Fix", "Opitonal", "Random"]);
export type UseSubType = z.infer<typeof UseSubTypeSchema>;

export const UseTypeSchema = z.enum(["Gift"]);
export type UseType = z.infer<typeof UseTypeSchema>;

export const ItemUseDataValueSchema = z.object({
  UseDataID: z.number(),
  UseType: UseTypeSchema,
  UseSubType: UseSubTypeSchema,
  UseParam: z.array(z.number()),
  UseMultipleMax: z.number(),
});
export type ItemUseDataValue = z.infer<typeof ItemUseDataValueSchema>;
