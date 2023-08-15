import * as z from "zod";

export const FormulaTypeSchema = z.enum(["Normal", "SelectedRelic", "Sepcial"]);
export type FormulaType = z.infer<typeof FormulaTypeSchema>;

export const FuncTypeSchema = z.enum(["Compose", "Replace"]);
export type FuncType = z.infer<typeof FuncTypeSchema>;

export const LimitTypeSchema = z.enum(["NotLimit", "Weekly"]);
export type LimitType = z.infer<typeof LimitTypeSchema>;

export const MaterialCostSchema = z.object({
  ItemID: z.number(),
  ItemNum: z.number(),
});
export type MaterialCost = z.infer<typeof MaterialCostSchema>;

export const ItemComposeConfigValueSchema = z.object({
  ID: z.number(),
  FormulaType: FormulaTypeSchema,
  RelicList: z.array(z.number()),
  SpecialMaterialCost: z.array(z.number()),
  ItemID: z.number(),
  MaterialCost: z.array(MaterialCostSchema),
  CoinCost: z.union([z.number(), z.null()]).optional(),
  Type: z.number(),
  Order: z.number(),
  WorldLevelRequire: z.union([z.number(), z.null()]).optional(),
  MaxCount: z.number(),
  IsShowHoldNumber: z.union([z.boolean(), z.null()]).optional(),
  ItemComposeTag: z.array(z.number()),
  LimitType: LimitTypeSchema,
  FuncType: FuncTypeSchema,
  FormulaRequire: z.union([z.number(), z.null()]).optional(),
  SpecialMaterialCostNumber: z.union([z.number(), z.null()]).optional(),
  LimitValue: z.union([z.number(), z.null()]).optional(),
});
export type ItemComposeConfigValue = z.infer<
  typeof ItemComposeConfigValueSchema
>;
