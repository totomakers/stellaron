import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const ConditionSchema = z.object({
  Type: z.string(),
  Param: z.string(),
});
export type Condition = z.infer<typeof ConditionSchema>;

export const SilverWolfTabGroupValueSchema = z.object({
  GroupID: z.number(),
  Name: NameSchema,
  IconPath: z.string(),
  ExploreFigurePath: z.string(),
  RaidFigurePath: z.string(),
  Conditions: z.array(ConditionSchema),
  ActivityModuleID: z.number(),
});
export type SilverWolfTabGroupValue = z.infer<
  typeof SilverWolfTabGroupValueSchema
>;
