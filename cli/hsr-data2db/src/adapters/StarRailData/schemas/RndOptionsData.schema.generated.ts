import * as z from "zod";

export const GroupIdSchema = z.enum(["Pam"]);
export type GroupId = z.infer<typeof GroupIdSchema>;

export const MenuItemTypeSchema = z.enum(["ChatIcon"]);
export type MenuItemType = z.infer<typeof MenuItemTypeSchema>;

export const RndOptionsDataValueSchema = z.object({
  ID: z.number(),
  GroupID: GroupIdSchema,
  MenuItemID: z.number(),
  MenuItemType: MenuItemTypeSchema,
  JsonPath: z.string(),
  Weight: z.number(),
  DialogShowOrder: z.union([z.number(), z.null()]).optional(),
});
export type RndOptionsDataValue = z.infer<typeof RndOptionsDataValueSchema>;
