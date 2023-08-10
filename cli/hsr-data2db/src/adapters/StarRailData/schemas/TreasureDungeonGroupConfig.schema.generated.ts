import * as z from "zod";

export const NameSchema = z.object({
  Hash: z.number(),
});
export type Name = z.infer<typeof NameSchema>;

export const TreasureDungeonGroupConfigValueSchema = z.object({
  GroupID: z.number(),
  ActivityModuleID: z.number(),
  ATKMazeBuffID: z.number(),
  MaxATK: z.number(),
  DEFMazeBuffID: z.number(),
  MaxDEF: z.number(),
  HpConversionRate: z.number(),
  HpConversionRate2: z.number(),
  ATKExchangeRatio: z.number(),
  ATKExchangeIconPath: z.string(),
  ATKExchangeName: NameSchema,
  DungeonIDList: z.array(z.number()),
  Name: NameSchema,
  ImgPath: z.string(),
});
export type TreasureDungeonGroupConfigValue = z.infer<
  typeof TreasureDungeonGroupConfigValueSchema
>;
