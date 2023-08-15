import * as z from "zod";

export const LimitType1Schema = z.enum(["Level", "MainMission"]);
export type LimitType1 = z.infer<typeof LimitType1Schema>;

export const ShopMainTypeSchema = z.enum(["Main", "Npc"]);
export type ShopMainType = z.infer<typeof ShopMainTypeSchema>;

export const ShopSchema = z.object({
  Hash: z.number(),
});
export type Shop = z.infer<typeof ShopSchema>;

export const ShopConfigValueSchema = z.object({
  ShopID: z.number(),
  ShopMainType: ShopMainTypeSchema,
  ShopType: z.number(),
  ShopName: ShopSchema,
  ShopDesc: ShopSchema,
  ShopIconPath: z.string(),
  ShopBar: z.string(),
  ShopSortID: z.union([z.number(), z.null()]).optional(),
  LimitType1: LimitType1Schema,
  LimitValue1List: z.array(z.number()),
  LimitValue2List: z.array(z.any()),
  IsOpen: z.union([z.boolean(), z.null()]).optional(),
  ScheduleDataID: z.union([z.number(), z.null()]).optional(),
  HideRemainTime: z.boolean(),
  ServerVerification: z.union([z.boolean(), z.null()]).optional(),
  ActivityModuleID: z.union([z.number(), z.null()]).optional(),
});
export type ShopConfigValue = z.infer<typeof ShopConfigValueSchema>;
